import {ReactNode} from "react";

type Themes = 'pink-theme';

export type ComponentProps =  {
    theme: Themes,
    children: ReactNode
}