import "./Title.css";

const Title = ({ text }) => {
  return (
    <>
      <div className="form-title">{text}</div>
      <hr />
    </>
  );
};

export default Title;
