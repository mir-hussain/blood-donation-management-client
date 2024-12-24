import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between gap-3 container mx-auto px-2 h-16">
        <Link to="/" className="text-xl font-semibold">
          Blood Link
        </Link>
        <div className="flex gap-3 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
            to="/hospitals"
          >
            Hospitals
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
            to="/requests"
          >
            Requests
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
            to="/login"
          >
            <Button>Login</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
