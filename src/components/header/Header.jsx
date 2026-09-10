import style from "./header.module.css";
import { Logo } from "../logo";
import { Button } from "../button";
import { ThemeSwitcher } from "../themeSwitcher";
import { Icon } from "../icon";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const secondsRef = useRef(0);

  const handleClick = () => {
    secondsRef.current = 0;
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    const timerId = setInterval(() => {
      secondsRef.current += 1;

      if (secondsRef.current >= 3) {
        clearInterval(timerId);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [isLoading]);

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
