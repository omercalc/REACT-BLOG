import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";

import "./BlogItem.css";

const BlogItem = (props) => {
  const [blogItem, setBlogItem] = useState({
    resim: props.resim,
    title: props.title,
    content: props.content,
    reporter: props.reporter,
    date: props.date,
  });

  const onEdit = () => {
    const newTitle = prompt("Yeni başlık:", blogItem.title);
    const newContent = prompt("Yeni içerik:", blogItem.content);
    setBlogItem({ ...blogItem, title: newTitle, content: newContent });
  };

  const onDelete = () => {
    setBlogItem(null);
  };

  if (!blogItem) return null;

  return (
    <div className="card-item bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center relative">
      <div className="url">
        <img className="img" src={blogItem.resim} alt={blogItem.title} />
        <h2 className="text-xl font-bold text-gray-800">{blogItem.title}</h2>
      </div>
      <div className="news-info">
        <p className="font-medium text-2x2">{blogItem.content}</p>
        <div className="author">
          <span className="reporter text-lg">{blogItem.reporter}</span>
          <span className="date">{blogItem.date}</span>
        </div>
        <div className="buton">
          <Button color="GUNCELLE" size="sm" onClick={onEdit}>Düzenle</Button>
          <Button color="SIL" size="sm" onClick={onDelete}>Sil</Button>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  resim: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  reporter: PropTypes.string,
  date: PropTypes.string,
};

export default BlogItem;