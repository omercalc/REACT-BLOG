import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import "./AddNewBlog.css";
import NewBlogInput from "../NewBlogInput/NewBlogInput";

const AddNewBlog = (props) => {
  const [newsData, setNewsData] = useState({
    newsImg: "",
    newsHeader: "",
    newsContent: "",
    newsReporter: "",
    newsDate: "",
  });
 

  const subjectChangeHandler = ({ target: { name, value } }) => {
    setNewsData({ ...newsData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newsDataToSend = {
      resim: newsData.newsImg,
      title: newsData.newsHeader,
      content: newsData.newsContent,
      reporter: newsData.newsReporter,
      date: newsData.newsDate,
    };
    

    props.setData((prevState) => [...prevState, newsDataToSend]);
    
    

    props.addBlogAndSort("");
    setNewsData({
      newsImg: "",
      newsHeader: "",
      newsContent: "",
      newsReporter: "",
      newsDate: "",
    });
  };

  const newsFormInputs = [
    {
      label: "Haber Resmi",
      type: "text",
      placeholder: "Haber resmini girin",
      name: "newsImg",
      required: true,
    },
    {
      label: "Haber Başlığı",
      type: "text",
      placeholder: "Haber başlığını girin",
      name: "newsHeader",
      required: true,
    },
    {
      label: "Haber İçeriği",
      type: "text",
      placeholder: "İçeriği girin",
      name: "newsContent",
      required: true,
    },
    {
      label: "Muhabir",
      type: "text",
      placeholder: "Adınızı girin",
      name: "newsReporter",
      required: true,
    },
    {
      label: "Haber Tarihi",
      type: "date",
      placeholder: "Haber Tarihini girin",
      name: "newsDate",
      required: true,
    },
  ];

  return (
    <div className="container">
      <h2 className="form-title">Haberi Yayınla</h2>
      <form onSubmit={submitHandler}>
        <div className="news">
          {newsFormInputs.map((input, index) => (
            <NewBlogInput
              key={index}
              {...input}
              subjectChangeHandler={subjectChangeHandler}
              newsData={newsData}
            />
          ))}
          <Button color="EKLE" size="sm">
            Haberi Ekle
          </Button>
        </div>
      </form>
    </div>
  );
};

AddNewBlog.propTypes = {
  setData: PropTypes.func.isRequired,
  addBlogAndSort: PropTypes.func.isRequired,
};

export default AddNewBlog;
