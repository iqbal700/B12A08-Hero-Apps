import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layoutes/MainLayoute";
import Error from "../Pages/Error";
import Home from "../Components/Home";
import AllApps from "../Pages/AllApps";
import Appdetails from "../Pages/Appdetails";





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
          path: '/apps',
          Component: AllApps
        },
        {
          path: '/appsdetails/:id',
          Component: Appdetails
        }
     ]
   

    
  },
]);


export default router;