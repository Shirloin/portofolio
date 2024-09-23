import { useState } from "react";

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
        <div className="fixed inset-0 h-screen w-full bg-black opacity-70"></div>
      )}
    </>
  );
}
