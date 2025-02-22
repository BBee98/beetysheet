import {ReactNode} from "react";
import styles from './button.module.css';


export const BeetySheetButton = ({ children }: { children: ReactNode }) => {
    return <button className={styles.beetysheetButton}>{ children }</button>;
}