import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Userlayout from "../Layouts/Userlayout";
import ProductDetails, { getproductdetails } from "../Pages/ProductDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Userlayout />,
        children:[
            {
                path: "",
                element: <App />,
            },
            {
                path: "/productdetails/:id",
                // :id is a dynamic parameter to fetch details of a specific product
                element: <ProductDetails/>,
                loader: getproductdetails
                // The loader function fetches data for the specific product before rendering the page.
            },
        ],
    },
   
]);