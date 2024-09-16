import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50">
        <Navbar />
        <div className="z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
