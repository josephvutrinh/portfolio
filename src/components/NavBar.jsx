import { IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const [boxStyle, setBoxStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef({});
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contacts' }
    ];

    useEffect(() => {
        const activeLink = linkRefs.current[location.pathname];
        const navElement = activeLink ? activeLink.closest('nav') : null;
        if (activeLink && navElement) {
            const rect = activeLink.getBoundingClientRect();
            const navRect = navElement.getBoundingClientRect();
            const marginAmount = 24;
            const offset = marginAmount / 2;
            setBoxStyle({
                left: rect.left - navRect.left + offset,
                width: rect.width - marginAmount,
                opacity: 1
            });
        }
        else {
            setBoxStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [location.pathname]);

    return (
        <div>
            <nav className={`p-6 items-center flex justify-center w-full relative ${darkMode ? "text-nav-dark" : "text-nav-light"}`}>
                <div
                    style={{ left: boxStyle.left, width: boxStyle.width, opacity: boxStyle.opacity }}
                    className={`
                        absolute h-8 rounded-lg transform transition-all duration-300 ease-in-out
                        ${darkMode ? "bg-button-bg-dark" : "bg-button-bg-light"}`}>
                </div>
                <div className="flex cursor-pointer relative z-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            ref={el => linkRefs.current[item.path] = el}
                            className={`
                                px-5 text-md transition-colors duration-250
                                ${location.pathname === item.path ? 
                                    (darkMode ? "text-white" : "text-black") : (darkMode ? "hover:text-white" : "hover:text-black")}
                                `}>
                                    {item.name}
                                </Link>
                    ))}
                </div>
                <button
                    onClick={toggleDarkMode}
                    className={`absolute right-6 cursor-pointer duration-250 ease-out ${darkMode ? "text-nav-dark" : "text-nav-light"}`}>
                    {darkMode ? <IoSunnyOutline className="text-2xl" /> : <IoMoonOutline className="text-2xl" />}
                </button>
            </nav>
        </div>
    );
};

export default NavBar;