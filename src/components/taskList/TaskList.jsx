import styles from "./taskList.module.css";
import { Illustration } from "../illustration";

function TaskList() {
  const tasks = [];

  return (
    <div className={styles.listWrapper} role="region" aria-label="Список задач">
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <h3 className={styles.taskTitle}>
              Все твои задачи организованы как надо
            </h3>
            <p className={styles.taskText}>
              Отличная работа! Ты большой молодец!
            </p>
          </div>
          <Illustration illustrationName={"taskDone"} className={styles.img} />
        </div>
      )}
    </div>
  );
}

export default TaskList;
