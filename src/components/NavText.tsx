import { NavLink } from "react-router-dom";

interface NavTextProps {
  title?: string;
  to: string;
  className?: string;
}

export default function NavText({ title, className, to }: NavTextProps) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-text group ${isActive ? "active" : ""} ${className}`
        }
      >
        {title}
        <span className="underline-animation"></span>
      </NavLink>
    </>
  );
}
