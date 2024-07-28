import BlogItem from "../BlogItem/BlogItem";
import { blogData } from "../../data/blogData";
import NewsModal from "../UI/NewsModal/NewsModal";
import { useState } from "react";
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
      placeholder: "Tarihte ara...",
      value: searchInput.searchDate,
      className: "search-input",
    },
  ];

  return (
    <section className="govde content-between gap-10 ">
      <div className="modal absolute left-50 top-40 m-12 transform -translate-y-1/2 p-12 flex-col ">
        <NewsModal setData={setData} addBlogAndSort={addBlogAndSort} />
      </div>

      <h1 className="p-28 font-bold text-2xl font-#56687a">
        LÜTFEN ARAMAK İSTEDİĞİNZ KRİTERLERİ VEYA <br /> HABER EKLEMEK İÇİN BUTONA BASINIZ
      </h1>

      <div className="search grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10   ">
        {searchInputs.map((input, index) => (
          <div key={index} className="flex flex-col ">
            <label htmlFor={input.name} className="mb-1 text-gray-700">
              {input.placeholder}
            </label>
            <input
              id={input.name}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      <div className="haberler grid gap-2 sm:grid-cols-2 md:grid-cols-3 relative ">
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
