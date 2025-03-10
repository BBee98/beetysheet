import {Link} from "../../../components-ui/button/button.component.tsx";
import {SectionComponent} from "../../../components-ui/section/section.component.tsx";

export const MainPanelComponent = () => {

  return <SectionComponent cssProps={{
      hasFlex: {
          flexDirection: "row"
      }
  }}>
      <Link theme='pink-theme' linkProps={{ type: 'link', href: 'create-slide'}}> Add slide </Link>
  </SectionComponent>;
};