import style from "./button.module.css"
import Icon from "../icon/Icon"

const Button = ({ children}) => {
    return (
        <button className={style.btn} type="button">
            <Icon className={style.image} iconName={"iconPlus"}/>
            {children}
        </button>
    )
}

export default Button