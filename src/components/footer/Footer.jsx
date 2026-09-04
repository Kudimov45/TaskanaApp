import "./footer.module.css"
import Link from "../link/Link"

const Footer = () => {
    return (
        <footer>
            <span>Проект выполнен в рамках стажировки <Link href = {"https://preax.ru/"}>PREAX</Link></span>
        </footer>
    )
}

export default Footer