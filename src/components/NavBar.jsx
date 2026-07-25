import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const location = useLocation();
    const [boxStyle, setBoxStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef({});
    const navRef = useRef(null);
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
    ];

    useEffect(() => {
        const moveBox = () => {
            const activeLink = linkRefs.current[location.pathname];
            if (activeLink && navRef.current) {
                const rect = activeLink.getBoundingClientRect();
                const navRect = navRef.current.getBoundingClientRect();
                const marginAmount = 12;
                setBoxStyle({
                    left: rect.left - navRect.left + marginAmount / 2,
                    width: rect.width - marginAmount,
                    opacity: 1,
                });
            } else {
                setBoxStyle((prev) => ({ ...prev, opacity: 0 }));
            }
        };
        moveBox();
        window.addEventListener("resize", moveBox);
        return () => window.removeEventListener("resize", moveBox);
    }, [location.pathname]);

    return (
        <header className="flex items-center justify-between py-10 gap-2">
            <Link
                to="/"
                className="font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap"
            >
                Joseph-Vu Trinh
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
                <nav ref={navRef} className="relative flex items-center text-nav-light dark:text-nav-dark">
                    <div
                        style={{ left: boxStyle.left, width: boxStyle.width, opacity: boxStyle.opacity }}
                        className="absolute h-8 rounded-lg [transition:left_.3s,width_.3s,opacity_.3s,background-color_.5s] ease-in-out bg-button-bg-light dark:bg-button-bg-dark"
                    ></div>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            ref={(el) => (linkRefs.current[item.path] = el)}
                            className={`relative z-10 px-2.5 sm:px-4 py-1.5 text-sm sm:text-base transition-colors duration-250
                                ${location.pathname === item.path
                                    ? "text-black dark:text-white"
                                    : "hover:text-black dark:hover:text-white"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                    className="relative w-6 h-6 cursor-pointer text-nav-light dark:text-nav-dark hover:text-black dark:hover:text-white transition-colors duration-250"
                >
                    <IoSunnyOutline
                        className={`absolute inset-0 text-2xl transition-all duration-500 ${
                            darkMode ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                        }`}
                    />
                    <IoMoonOutline
                        className={`absolute inset-0 text-2xl transition-all duration-500 ${
                            darkMode ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                        }`}
                    />
                </button>
            </div>
        </header>
    );
};

export default NavBar;
