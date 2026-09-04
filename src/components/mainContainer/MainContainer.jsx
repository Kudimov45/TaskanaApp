import styles from "./mainContainer.module.css";

import TaskList from "@/components/taskList/TaskList";



function MainContainer() {
    return (
        <div className={styles.container}>
            <h1 className="visually-hidden">Сайт для планирования задач</h1>
            <h2 className={styles.title}>Входящие</h2>
            <TaskList />
        </div>
    );
}

export default MainContainer;