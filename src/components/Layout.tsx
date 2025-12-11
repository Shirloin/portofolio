import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Cursor from "./Cursor";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <div className="relative flex min-h-screen w-full min-w-full flex-col bg-gray-50 text-black transition-colors duration-300 dark:bg-zinc-900 dark:text-white">
        <Cursor />
        <Toaster />
        <ScrollToTop />
        <Navbar />
        <div className="relative z-10 mx-auto flex w-full flex-grow flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900">
          <Outlet />
        </div>
      </div>
    </>
  );
}
