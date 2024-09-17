import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
import "animate.css";

export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <RouterProvider router={router} />;
}
