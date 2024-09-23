import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuSheet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer text-[1.5rem] font-bold md:hidden"
      >
        <i className="bi bi-list"></i>
      </button>
      {isOpen && (
        <div
          className={`absolute inset-0 h-screen overflow-hidden bg-white p-4 font-bold transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-7 w-7 items-center justify-center self-end rounded-md border-2 border-black text-center text-black"
            >
              <i className="fa fa-close"></i>
            </button>
            <Link
              to={"/"}
              onClick={() => setIsOpen(!isOpen)}
              className="my-2 p-2 text-center text-xl"
            >
              Home
            </Link>
            <hr />
            <Link
              to={"/project"}
              onClick={() => setIsOpen(!isOpen)}
              className="my-2 p-2 text-center text-xl"
            >
              Projects
            </Link>
            <hr />
            <Link
              to={"/certification"}
              onClick={() => setIsOpen(!isOpen)}
              className="my-2 p-2 text-center text-xl"
            >
              Certifications
            </Link>
            <hr />
            <Link
              to={"/contact"}
              onClick={() => setIsOpen(!isOpen)}
              className="my-2 p-2 text-center text-xl"
            >
              Contact
            </Link>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}
