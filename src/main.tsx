import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import './index.css'
import {AppRoutes} from "./routes/app-routes.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
