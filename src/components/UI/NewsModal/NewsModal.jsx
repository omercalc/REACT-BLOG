import AddNewBlog from "../../AddNewBlog/AddNewBlog";
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const NewsModal = ({ setData, addBlogAndSort }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div>
      <button 
        onClick={toggleModal} 
        className="bg-blue-500 text-white font-bold py-2 px-4  rounded "
      >
        Haber Ekle
      </button>
      {isModalOpen && ReactDOM.createPortal(
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={handleOutsideClick}
        >
          <div 
            className="bg-white p-6 rounded shadow-lg w-1/2 relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span 
              className="absolute top-0 right-0 p-4 cursor-pointer text-gray-500"
              onClick={toggleModal}
            >
              &times;
            </span>
            <AddNewBlog setData={setData} addBlogAndSort={addBlogAndSort} />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

NewsModal.propTypes = {
  setData: PropTypes.func.isRequired,
  addBlogAndSort: PropTypes.func.isRequired,
};

export default NewsModal;