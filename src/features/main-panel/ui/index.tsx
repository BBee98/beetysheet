import {ButtonComponent} from "../../../components-ui/button/button.component.tsx";
import {SectionComponent} from "../../../components-ui/section/section.component.tsx";

export const MainPanelComponent = () => {

  return <SectionComponent cssProps={{
      hasFlex: true
  }}>
      <ButtonComponent  theme='pink-theme'> Add slide </ButtonComponent>
  </SectionComponent>;
};