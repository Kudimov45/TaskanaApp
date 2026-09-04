import Content from "@/components/content/Content";

import Header from "@/components/header/Header";
import IncomingTasks from "@/pages/incomingTasks/IncomingTasks";
import style from "./applayout.module.css";

const AppLayout = () => {
    return (
        <div className={style.layout}>
            <Header/>
            <Content/>
        </div>
             
    )
}

export default AppLayout;