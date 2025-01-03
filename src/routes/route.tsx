import App from "@/App";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from "react-router-dom";

const routes =createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/tasks",
        element: <Tasks />
    }
])
export default routes