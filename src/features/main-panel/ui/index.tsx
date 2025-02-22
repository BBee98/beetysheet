import styles from './styles.module.css';
import cx from 'classnames';
import {BeetySheetButton} from "../../../beetysheet-ui/button/button.component.tsx";

export const MainPanelComponent = () => {

    const wrapper = cx({
        [styles.wrapper]: true,
        ["flex"]: true,
        ["h-screen"]: true,
    });

  return <section className={wrapper}>
      <BeetySheetButton> Add slide </BeetySheetButton>
  </section>;
};