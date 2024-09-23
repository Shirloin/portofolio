import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen w-full min-w-full flex-col overflow-x-hidden bg-gray-50">
        <Navbar />
        <div className="z-10 mx-auto flex w-full flex-grow flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
