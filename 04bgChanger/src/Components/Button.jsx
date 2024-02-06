/* eslint-disable react/prop-types */
const Button = (props) => {

    const clickHandler = () => {
        props.clickFun(props.btnColor);
    }

  return (
    <button
      className="rounded-full shadow-lg ml-0.5 mr-0.5"
      style={{ backgroundColor: props.btnColor }}
      onClick={clickHandler}
    >
      {props.btnColor}
    </button>
  );
};

export default Button;
