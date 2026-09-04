import style from "./navBar.module.css"
import { useTheme } from '../themeSwitcher/ThemeSwitcher';
import Icon from "../icon/Icon";

const NavBar = () => {
    const { theme } = useTheme()



    const message = [
        {
            "id": 1,
            "text": "Входящие",
        },
    ];
    return (
        <nav className={style.navBar}>
            <ul className={style.list}>
                {message.map((item) => 
                    <li key={item.id}>
                        <a className={style.link}  href="#">
                            <Icon iconName={"iconMessage"} className={style.icon}/>
                            {item.text}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar