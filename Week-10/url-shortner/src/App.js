import "./styles.css";
import NavElement from "../src/components/NavElement";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../src/pages/About";
import HomePage from "../src/pages/HomePage";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <NavElement />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
