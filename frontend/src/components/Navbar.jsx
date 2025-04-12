import React from "react";
import { User, Sun, Moon, Flame, Code } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [isDark, setIsDark] = React.useState(false);

  // Placeholder for auth user
  const { authUser } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 w-full py-5">
      <div className="flex w-full justify-between mx-auto max-w-4xl bg-black/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-gray-200/10 p-4 rounded-2xl">
        <a className="flex items-center gap-3 cursor-pointer">
          <Code className="h-18 w-18 bg-primary/20 text-primary border-none  px-2 py-2 rounded-full" />
          <span className="text-lg md:text-2xl font-bold tracking-tight text-white hidden md:block">
            LetsCode
          </span>
        </a>

        <div className="flex items-center gap-8">
          {/* User Profile Button */}
          <button className="flex items-center gap-2 rounded-xl px-3 py-2 bg-black/15 hover:bg-black/25 transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200/20">
              <img
                src={
                  authUser?.image || "https://avatar.iran.liara.run/public/boy"
                }
                alt="notion avatar"
                className=" object-cover"
              />
            </div>

            <LogoutButton>Logout</LogoutButton>
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
