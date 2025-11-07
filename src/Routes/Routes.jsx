import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layoutes/MainLayoute";
import Error from "../Pages/Error";
import Home from "../Components/Home";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error/>,
    children:
     [
        { index: true,
          Component: Home

        }
     ]
   

    
  },
]);


export default router;