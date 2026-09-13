import style from "./taskList.module.css";
import { Illustration } from "../illustration";
import { Icon } from "../icon";

function TaskList({ tasks }) {
  return (
    <div className={style.listWrapper} role="region" aria-label="Список задач">
      {tasks.length > 0 ? (
        <ul className={style.list}>
          {tasks
            .slice()
            .reverse()
            .map((item) => (
              <li key={item.id} className={style.listItem}>
                <label className={style[`label${item.priority}`]}>
                  <input className={style.checkBox} type="checkbox" />
                  <Icon iconName={"iconCheck"} className={style.icon} />
                </label>
                {item.title}
              </li>
            ))}
        </ul>
      ) : (
        <div className={style.container}>
          <div className={style.textWrapper}>
            <h3 className={style.taskTitle}>
              Все твои задачи организованы как надо
            </h3>
            <p className={style.taskText}>
              Отличная работа! Ты большой молодец!
            </p>
          </div>
          <Illustration illustrationName={"taskDone"} className={style.img} />
        </div>
      )}
    </div>
  );
}

export default TaskList;
