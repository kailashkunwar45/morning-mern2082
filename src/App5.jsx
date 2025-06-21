// App5.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Rootlayout from "./components/Rootlayout";
import Menu from "./pages/menu/Menu";
import Front from "./pages/front/Front";


export default function App5() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Front />

        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}






