import {Routes} from "react-router";
import {Route} from "react-router-dom";
import App from "../App.tsx";
import {CreateSlideComponent} from "../features/create-slide/ui";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/create-slide" element={<CreateSlideComponent />} />
        </Routes>
    )
}