import cx from "classnames";
import styles from './section.module.css';
import {ReactNode} from "react";

export type SectionComponent = {
    cssProps: {
      hasFlex: boolean,
    },
    children: ReactNode,
}

export const SectionComponent = ({cssProps, children}: SectionComponent) => {

    const sectionCSS = cx({
        ["flex"]: cssProps.hasFlex,
        ["h-screen"]: true,
    });

    return <section className={sectionCSS} style={{

    }}> { children }</section>
}