import style from "./link.module.css"

const Link = ({ children, href}) => {
    return ( <a className={style.link} href={href}>
        {children}
    </a>)
}

export default Link;