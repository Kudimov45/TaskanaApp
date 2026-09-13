import style from "./button.module.css";

const Button = ({ children, onClick, className, isDisabled }) => {
  return (
    <button
      className={className ? className : style.btn}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
