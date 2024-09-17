import NavText from "./NavText";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-md shadow-gray-100">
        <div className="mx-auto flex max-w-[80%] items-center justify-between py-4">
          <div className="logo text-xl font-extrabold">
            <a href="#" className="no-underline">
              Riccardo.dev
            </a>
          </div>
          <input type="checkbox" id="click" className="hidden" />

          <nav className="hidden space-x-8 md:flex">
            <NavText to="/" title="Home" />
            <NavText to="/project" title="Projects" />
            <NavText to="/certification" title="Certifications" />
            <NavText to="/contact" title="Contact" />
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
