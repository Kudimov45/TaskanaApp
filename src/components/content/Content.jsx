import style from "./content.module.css"
import NavBar from "@/components/navBar/NavBar"
import IncomingTasks from "@/pages/incomingTasks/IncomingTasks"
import SideBar from "../sideBar/SideBar"


const Content = () => {
    return (
        <div className={style.content}>
        <NavBar/>
        <main className={style.main}>
            <IncomingTasks/>
        </main>
        <SideBar/>
        </div>
    )
}

export default Content