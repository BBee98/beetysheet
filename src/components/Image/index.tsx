import styles from './index.module.css';
import { IoMdCloseCircle } from "react-icons/io";


type ImageProps = {
    name: string,
    image: string
}

export const Image = ({ name, image}: ImageProps) => {
    return <div className={styles.wrapper}>
        <button className={styles["button-close"]}> <IoMdCloseCircle /> </button>
        <img alt={name} src={image} className={styles.image} />
    </div>
}