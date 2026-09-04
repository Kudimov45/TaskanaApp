import styles from "./logo.module.css";
import Icon from "../icon/Icon"

function Logo() {
    return (
        <a href="/" aria-label="На главную" className={styles.link}>
            <Icon iconName={"iconLogo"} className={styles.logo}/>
        </a>
    );
}

export default Logo;