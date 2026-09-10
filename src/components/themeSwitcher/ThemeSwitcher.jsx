import style from "./themeSwitcher.module.css";
import { Icon } from "../icon";
import { Button } from "../button";

import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={style.wrapper}>
      <Button
        className={style.switch}
        type="button"
        onClick={toggleTheme}
        aria-label="Переключить тему"
        aria-pressed={theme === "dark"}
      ></Button>
      <div className={style.wrapperIcon}>
        <Icon
          className={`${style.iconLight} ${theme === "light" ? style["iconLight--light"] : style["iconLight--dark"]}`}
          iconName={"iconSun"}
        />
        <Icon
          className={`${style.iconDark} ${theme === "light" ? style["iconDark--light"] : style["iconDark--dark"]}`}
          iconName={"iconMoon"}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
