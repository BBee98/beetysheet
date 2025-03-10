import styles from './button.module.css';
import cx from 'classnames';
import {ComponentProps} from "../themes.ts";
import {NavLink} from "react-router-dom";

export type LinkType = 'link' | 'button';

export type LinkProps = ComponentProps & {
    linkProps: {
        type: LinkType,
        href: string
    }
}

export const Link = ({theme, children, linkProps}: LinkProps) => {

    const linkCSS = cx({
        [styles.button]: true,
        [styles[theme]]: true,
        ["flex"]: true,
        ["max-w-full"]: true,
    })

    return (<>
        {linkProps.type === 'button' ? <button className={linkCSS}>{children}</button> :
            <NavLink className={linkCSS} to={linkProps.href}>{children} </NavLink>}
    </>);
}