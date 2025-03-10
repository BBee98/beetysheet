import {SectionComponent} from "../../../components-ui/section/section.component.tsx";
import {SidenavComponent} from "../../../components-ui/sidenav/sidenav.component.tsx";

const options = [
    "Añadir imagen"
]

export const CreateSlideComponent = () => {

    return <SectionComponent cssProps={{
        hasFlex: {
            flexDirection: "col"
        },
        padding: {
            value: "var(--spc48)"
        }
    }}>
        <SidenavComponent>
            { options.map( option => <button> { option }</button>)}
        </SidenavComponent>
        <h1> Create your slide </h1>

    </SectionComponent>
}