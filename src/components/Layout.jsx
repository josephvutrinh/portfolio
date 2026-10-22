import NavBar from "./NavBar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import CatButton from "./CatButton";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col overflow-x-clip bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark transition-colors duration-500">
            <ParticleBackground />
            <CatButton />
            <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 flex flex-col flex-1">
                <NavBar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
