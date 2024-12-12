import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Cursor from "./Cursor";

export default function Layout() {
  return (
    <>
      <div className="relative flex min-h-screen w-full min-w-full flex-col overflow-x-hidden bg-gray-50">
        <Cursor />
        <Toaster />
        <Navbar />
        {/* <audio
          src="/musics/theme.mp3"
          controls
          autoPlay
          loop
          className="hidden"
        /> */}
        <div className="justfiy-start z-10 mx-auto flex w-full flex-grow flex-col items-center md:justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
