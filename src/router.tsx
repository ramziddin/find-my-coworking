import { createBrowserRouter } from "react-router-dom"
import Index from "./pages"
import Coworking from "./pages/coworking"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/coworking/:id",
    element: <Coworking />,
  },
])

export default router
