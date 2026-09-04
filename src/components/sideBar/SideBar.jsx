import Statistic from "../statistic/Statistic"
import style from "./sideBar.module.css"
import { useTheme } from '../themeSwitcher/ThemeSwitcher';

const SideBar = () => {
    const { theme } = useTheme()

    return (
        <aside className={`${style.sideBar} ${theme === 'dark' ? style.sideBarDark : ''}`}>
            <Statistic/>
        </aside>
    )
}

export default SideBar