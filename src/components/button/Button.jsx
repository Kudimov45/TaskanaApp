import style from "./button.module.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={className ? className : style.btn}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
