import {ReactNode} from "react";
import cx from "classnames";
import styles from "../../features/create-slide/ui/styles.module.css";

export const SidenavComponent = ({ children }: {children: ReactNode}) => {

    const sidenavCSS = cx({
        [styles["flex"]]: true
    })

    return (<nav className={sidenavCSS}>{ children }</nav>)
}