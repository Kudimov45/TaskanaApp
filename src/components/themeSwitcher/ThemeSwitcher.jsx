import style from "./themeSwitcher.module.css";
import Icon from "../icon/Icon";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme должен использоваться внутри ThemeProvider");
  }
  return context;
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={style.wrapper}>
      <button
        className={style.switch}
        type="button"
        onClick={toggleTheme}
      ></button>
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
