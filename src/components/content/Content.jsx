import style from "./content.module.css";
import { NavBar } from "../navBar";
import { IncomingTasks } from "@/pages/incomingTasks";
import { SideBar } from "../sideBar";
import { Footer } from "../footer";

const Content = () => {
  return (
    <div className={style.content}>
      <NavBar />
      <main className={style.main}>
        <IncomingTasks />
        <Footer />
      </main>
      <SideBar />
    </div>
  );
};

export default Content;
