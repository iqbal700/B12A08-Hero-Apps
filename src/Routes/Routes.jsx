import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layoutes/MainLayoute";
import Error from "../Pages/Error";
import Home from "../Components/Home";
import AllApps from "../Pages/AllApps";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error/>,
    children:
     [
        { index: true,
          Component: Home
        },
        {
          path: 'apps',
          Component: AllApps
        }
     ]
   

    
  },
]);


export default router;