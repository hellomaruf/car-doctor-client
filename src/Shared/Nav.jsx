import { NavLink } from "react-router-dom";
import logo from "../assets/carlogo.svg";
const link = (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-5 p-2 text-orange-500 font-semibold" : "mr-5 p-2"
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-5 p-2 text-orange-500 font-semibold" : "mr-5 p-2"
      }
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-5 p-2 text-orange-500 font-semibold" : "mr-5 p-2"
      }
      to="/service"
    >
      Service
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-5 p-2 text-orange-500 font-semibold" : "mr-5 p-2"
      }
      to="/blog"
    >
      Blog
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-5 p-2 text-orange-500 font-semibold" : "mr-5 p-2"
      }
      to="/content"
    >
      Content
    </NavLink>
  </>
);
function Nav() {
  return (
    <div className="max-w-7xl mx-auto my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-white border-2 border-orange-500 text-orange-500">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;