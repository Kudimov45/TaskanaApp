import style from "./content.module.css";
import { NavBar } from "../navBar";
import { IncomingTasks } from "@/pages/incomingTasks";
import { SideBar } from "../sideBar";
import { Footer } from "../footer";
import { TaskEditor } from "../taskEditor";
import { useState } from "react";

const Content = ({ isActive, setIsActive }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={style.content}>
      <NavBar />
      <main className={style.main}>
        <IncomingTasks tasks={tasks} />
        <Footer />
      </main>
      <SideBar />
      <TaskEditor
        isActive={isActive}
        setIsActive={setIsActive}
        setTasks={setTasks}
      />
    </div>
  );
};

export default Content;
