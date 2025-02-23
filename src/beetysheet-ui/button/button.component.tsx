import {ReactNode} from "react";
import styles from './button.module.css';
import cx from 'classnames';
import {Themes} from "../themes.ts";

export const BeetySheetButton = ({ theme, children }: { theme: Themes, children: ReactNode }) => {

    const buttonCSS = cx({
        [styles.button]: true,
        [styles[theme]]: true,
        ["flex"]: true,
        ["max-w-full"]: true,
    })

    return <button className={buttonCSS}>{ children }</button>;
}