import style from "./themeSwitcher.module.css"
import Icon from "../icon/Icon"

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
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
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};

const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className={style.wrapper}>
            <input className={style.switch} type="checkbox" id="Switch" onChange={toggleTheme}></input>
            <label className={style.wrapperIcon} htmlFor="Switch">
                <Icon className={style.iconLight} iconName={"iconSun"}/>
                <Icon className={style.iconDark} iconName={"iconMoon"}/>
            </label>
        </div>
    )

}

export default ThemeSwitcher