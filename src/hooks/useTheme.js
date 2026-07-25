import { useEffect, useState } from "react";

const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored === "dark";
    return true; // default to dark mode
};

const useTheme = () => {
    const [darkMode, setDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return { darkMode, toggleDarkMode };
};

export default useTheme;
