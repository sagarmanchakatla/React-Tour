import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <About /> */}
    </>
  );
}

export default App;
