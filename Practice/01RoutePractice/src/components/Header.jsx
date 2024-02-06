import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" h-60 w-full bg-blue-300">
      <div className="flex flex-row justify-between p-4">
        <div className="text-3xl font-bold text-red-800">navBrand</div>
        <NavLink
          to="/"
          className={({isActive}) =>
            `font-bold ${isActive ? "text-yellow-300" : "text-black"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) =>
            `font-bold ${isActive ? "text-yellow-300" : "text-black"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/github"
          className={({isActive}) =>
            `font-bold ${isActive ? "text-yellow-300" : "text-black"}`
          }
        >
          GitHub
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
