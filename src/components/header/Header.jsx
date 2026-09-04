import style from "./header.module.css";
import Logo from '../logo/Logo';
import Button from "../button/Button";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className={style.wrapper}>
                    <Logo />
                    <div className={style.wrapperBtn}>
                        <Button>Создать</Button>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;