import style from "./incomingTasks.module.css";
import MainContainer from "@/components/mainContainer/MainContainer";

const IncomingTasks = ({ tasks }) => {
  return (
    <div className={style.tasks}>
      <MainContainer tasks={tasks} />
    </div>
  );
};

export default IncomingTasks;
