import { Statistic } from "../statistic";
import style from "./sideBar.module.css";

const SideBar = () => {
  return (
    <aside className={style.sideBar}>
      <Statistic />
    </aside>
  );
};

export default SideBar;
