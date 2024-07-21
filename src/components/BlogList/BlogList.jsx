import BlogItem from "../BlogItem/BlogItem";
import { blogData } from "../../data/blogData";
import AddNewBlog from "../AddNewBlog/AddNewBlog";
import { useState, useEffect } from "react";
import "./BlogList.css";

const BlogList = () => {
  const [data, setData] = useState(blogData);
  const [searchInput, setSearchInput] = useState({
    searchText: "",
    searchAuthor: "",
    searchDate: "",
  });

  const handleFilterChange = ({ target: { name, value } }) => {
    setSearchInput((prev) => ({ ...prev, [name]: value }));
  };

  const filterBlogs = () => {
    const { searchText, searchAuthor, searchDate } = searchInput;

    return data.filter((blog) => {
      const titleMatches =
        blog.title &&
        blog.title.toLowerCase().includes(searchText.toLowerCase());
      const reporterMatches =
        blog.reporter &&
        blog.reporter.toLowerCase().includes(searchAuthor.toLowerCase());
      const dateMatches =
        !searchDate ||
        new Date(blog.date).toDateString() ===
          new Date(searchDate).toDateString();

      return titleMatches && reporterMatches && dateMatches;
    });
  };

  const sortDataByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  useEffect(() => {
    setData(sortDataByDate(blogData));
  }, []);

  const addBlogAndSort = (newBlog) => {
    setData((prevData) => sortDataByDate([...prevData, newBlog]));
  };

  const searchInputs = [
    {
      type: "text",
      name: "searchText",
      placeholder: "Blog başlığında ara...",
      value: searchInput.searchText,
      className: "search-input",
    },
    {
      type: "text",
      name: "searchAuthor",
      placeholder: "Yazar adında ara...",
      value: searchInput.searchAuthor,
      className: "search-input",
    },
    {
      type: "date",
      name: "searchDate",
      value: searchInput.searchDate,
      className: "search-input",
    },
  ];

  return (
    <section className="govde content-between gap-40">
      <div className="haber-ekleme m-20 flex-row">
        <AddNewBlog setData={setData} addBlogAndSort={addBlogAndSort} />
        <div className="search">
          {searchInputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={handleFilterChange}
              className={input.className}
            />
          ))}
        </div>
      </div>
      <div className="haberler grid md:grid-cols-3">
        {filterBlogs().map((blog) => (
          <BlogItem
            key={blog.resim}
            resim={blog.resim || "defaultImagePath.jpg"}
            title={blog.title}
            content={blog.content}
            reporter={blog.reporter}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
