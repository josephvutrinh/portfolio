import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

const Layout = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className={`${darkMode ? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"} transition-colors duration-250>`}>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet />
        </div>
    )
}

export default Layout