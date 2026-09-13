import style from "./taskEditor.module.css";
import { Button } from "../button";
import { Icon } from "../icon";
import { useState } from "react";
import idGenerator from "@/utils/idGenerator";

const TaskEditor = ({ isActive, setIsActive, setTasks }) => {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState(0);

  const createTask = () => {
    const newTask = {
      id: idGenerator(),
      title: value,
      priority: priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
    setValue("");
    exitTaskEditor();
  };

  const exitTaskEditor = () => {
    setIsActive(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={`${style.taskEditor} ${isActive ? style["taskEditor--active"] : ""}`}
    >
      <div className={style.wrapperEditor}>
        <h2 className={style.title}>Создание задачи</h2>
        <label className={style.label}>
          <span>
            Название <span className={style.textRed}>*</span>
          </span>
          <input
            className={style.input}
            value={value}
            onChange={handleChange}
            type="text"
            name="taskName"
            placeholder="Название задачи"
          />
          <Button className={style.btnDel}>
            <Icon iconName={"iconX"} className={style.icon} />
          </Button>
        </label>
        <div className={style.inner}>
          <span>Приоритет</span>
          <div className={style.wrapperPriority}>
            <label className={style.labelPriority}>
              <input
                className={style.priority}
                type="radio"
                name="priority"
                value={0}
                checked={priority === 0}
                onChange={(e) => setPriority(Number(e.target.value))}
              />
              <Icon iconName={"iconMinus"} className={style.iconWhite} />
            </label>

            <label className={style.labelPriority}>
              <input
                className={style.priority}
                type="radio"
                name="priority"
                value={1}
                checked={priority === 1}
                onChange={(e) => setPriority(Number(e.target.value))}
              />
              <Icon iconName={"iconPriorityOne"} className={style.iconViolet} />
            </label>

            <label className={style.labelPriority}>
              <input
                className={style.priority}
                type="radio"
                name="priority"
                value={2}
                checked={priority === 2}
                onChange={(e) => setPriority(Number(e.target.value))}
              />
              <Icon iconName={"iconPriorityTwo"} className={style.iconRed} />
            </label>
          </div>
        </div>
      </div>
      <div className={style.wrapperBtn}>
        <Button
          className={style.btnCreate}
          onClick={createTask}
          isDisabled={!String(value || "").trim()}
        >
          Создать
        </Button>
        <Button className={style.btnCancel} onClick={exitTaskEditor}>
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default TaskEditor;
