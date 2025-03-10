import cx from "classnames";
import {ReactNode} from "react";
import {CSSTypes} from "../types.ts";

export type SectionComponent = {
    cssProps: CSSTypes,
    children: ReactNode,
}

export const SectionComponent = ({cssProps, children}: SectionComponent) => {

    const sectionCSS = cx({
        ["flex"]: cssProps.hasFlex !== undefined,
        [cssProps.hasFlex.flexDirection]: true,
        ["itemsCenter"]: cssProps.hasFlex.itemsCenter,
        ["justifyCenter"]: cssProps.hasFlex.contentCenter,
        ["h-screen"]: true,
    });

    return <section className={sectionCSS}> { children }</section>
}