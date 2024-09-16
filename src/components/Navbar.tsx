export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white text-primary shadow-md shadow-gray-100">
        <div className="mx-auto flex max-w-[80%] items-center justify-between py-4">
          <div className="logo text-xl font-extrabold">
            <a href="#" className="no-underline">
              Riccardo.dev
            </a>
          </div>
          <input type="checkbox" id="click" className="hidden" />

          <nav className="hidden space-x-4 md:flex">
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
            className="flex cursor-pointer text-[1.5rem] font-bold md:hidden"
          >
            <i className="bi bi-list"></i>
          </label>
        </div>
      </header>
    </>
  );
}
