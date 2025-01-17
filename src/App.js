import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products",
        element: <Products />
      },
      {
        path:"/products/:id",
        element: <Product />,
      },
      {
        path:"/about",
        element: '',
      },
      {
        path:"/contact",
        element: '',
      },
      
    ] 
  },
  {
    path: "/register",
    element: '',
  },
  {
    path: "/login",
    element: '',
  },
  {
    path: "/cart",
    element: '',
  },


]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
