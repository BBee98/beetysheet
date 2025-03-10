import {ReactNode} from "react";
import cx from "classnames";
import styles from './sidenav.module.css';

export const SidenavComponent = ({ children }: {children: ReactNode}) => {

    const sidenavCSS = cx({
        ["flex"]: true,
        ["fixed"]: true,
        [styles.sidenav]: true,
    })

    return (<nav className={sidenavCSS}>{ children }</nav>)
}