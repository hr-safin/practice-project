import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center font-bold">
      <NavLink
        to="/"
        className={({ isActive }) => (!isActive ? "text-blue-600 underline underline-offset-4" : "text-black")}
      >
        All
      </NavLink>
      <NavLink to="/?todos=active" className={({isActive}) => (!isActive ? "text-blue-600 underline underline-offset-4" : "")}>
        Active
      </NavLink>
      <NavLink to="/?todos=completed" className={({isActive}) => (!isActive ? "" : "text-blue-600 underline underline-offset-4" )}>
        Completed
      </NavLink>
    </nav>
  );
};

export default NavBar;
