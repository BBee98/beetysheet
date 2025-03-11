import styles from './index.module.css';
import { CiImageOn } from "react-icons/ci";


export const SidenavMenu = () => {
    return <nav className={styles.sidenav}>
        <button className={styles.button}>
            <CiImageOn size={32} />
            <span> Añadir imagen </span>
        </button>
    </nav>
}