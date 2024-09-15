export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 w-full  bg-white shadow-md shadow-gray-100">
        <div className="py-4 flex justify-between items-center max-w-[80%] mx-auto ">
          <div className="logo text-xl font-extrabold">
            <a href="#" className="text-[#244D61] no-underline">
              Shirloin
            </a>
          </div>
          <input type="checkbox" id="click" className="hidden" />

          <nav className="hidden md:flex space-x-4">
            <a href="#" className="nav-text">
              Home
            </a>
            <a href="#" className="nav-text">
              About
            </a>
            <a href="#" className="nav-text">
              Skills
            </a>
            <a href="#" className="nav-text">
              Portfolio
            </a>
            <a href="#" className="nav-text">
              Contact
            </a>
          </nav>
          <label
            htmlFor="click"
            className="flex md:hidden text-[#244D61] text-[1.5rem] font-bold cursor-pointer"
          >
            <i className="bi bi-list"></i>
          </label>
        </div>
      </header>
    </>
  );
}
