import style from "./header.module.css";
import { Logo } from "../logo";
import { Button } from "../button";
import { ThemeSwitcher } from "../themeSwitcher";
import { Icon } from "../icon";
import { useState } from "react";

const Header = ({ setIsActive }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setIsActive(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <header className="header">
      <div className="container">
        <div className={style.wrapper}>
          <Logo />
          <div className={style.wrapperBtn}>
            <Button onClick={handleClick}>
              {isLoading ? (
                <Icon className={style.iconLoading} iconName={"iconLoading"} />
              ) : (
                ""
              )}
              <Icon
                className={isLoading ? style.icon : ""}
                iconName={"iconPlus"}
              />
              <span className={isLoading ? style.btnText : ""}>Создать</span>
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
