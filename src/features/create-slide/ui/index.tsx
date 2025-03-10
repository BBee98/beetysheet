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
        <article style={{
            position: "relative",
            marginLeft: "150px",
        }}>
            <h1> Create slide </h1>
        </article>

    </SectionComponent>
}