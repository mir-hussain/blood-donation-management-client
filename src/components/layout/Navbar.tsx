/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";

export default function Navbar() {
  const token = useSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

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
            to="/admin"
          >
            Admin
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
            to="/receptionist"
          >
            Receptionist Admin
          </NavLink>
          {/* @ts-ignore */}
          {!user?.email ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
              to="/login"
            >
              <Button>Login</Button>
            </NavLink>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <Link to="/profile">
                  <DropdownMenuItem>
                    <User />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => handleLogout()}>
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  );
}
