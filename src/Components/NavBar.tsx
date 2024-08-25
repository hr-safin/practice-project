import {  NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center">
      <NavLink to="/" className="">All</NavLink>
      <NavLink to="/?todos=active" className="">Active</NavLink>
      <NavLink to="/?todos=completed" className="">Completed</NavLink>
    </nav>
  )
}

export default NavBar
