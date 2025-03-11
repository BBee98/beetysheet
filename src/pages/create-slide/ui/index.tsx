import {SidenavMenu} from "../../../components/sidenav-menu";

import styles from './index.module.css';
import {ImageForm} from "../../../features/image-form";

export const CreateSlidePage = () => {
    return <section className={styles.wrapper}>
        <SidenavMenu />
        <div className={styles.window}>
            <h1> Create your slide </h1>
            <ImageForm />
        </div>
    </section>
}