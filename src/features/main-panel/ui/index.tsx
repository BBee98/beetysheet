import styles from './styles.module.css';
import cx from 'classnames';
import {ButtonComponent} from "../../../components-ui/button/button.component.tsx";

export const MainPanelComponent = () => {

    const wrapper = cx({
        [styles.wrapper]: true,
        ["flex"]: true,
        ["h-screen"]: true,
    });

  return <section className={wrapper}>
      <ButtonComponent  theme='pink-theme'> Add slide </ButtonComponent>
  </section>;
};