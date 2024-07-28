import PropTypes from "prop-types";

const NewBlogInput = (props) => {
  const {
    label,
    subjectChangeHandler,
    type,
    placeholder,
    name,
    required,
    newsData,
  } = props;

  return (
    <div className="input-box">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={subjectChangeHandler}
        value={newsData[name]}
        name={name}
        required={required}
      />
    </div>
  );
};

NewBlogInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  newsData: PropTypes.object.isRequired,
  subjectChangeHandler: PropTypes.func.isRequired,
};

export default NewBlogInput;
 