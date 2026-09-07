import style from "./incomingTasks.module.css";
import Footer from "@/components/footer/Footer";
import MainContainer from "@/components/mainContainer/MainContainer";

const IncomingTasks = () => {
  return (
    <div className={style.tasks}>
      <MainContainer />
    </div>
  );
};

export default IncomingTasks;
