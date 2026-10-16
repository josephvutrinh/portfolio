import { Link } from "react-router-dom";
import { useEffect } from "react";

const HermesPage = ({ title, description, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
    <article className="mt-8 mb-8 space-y-8 leading-relaxed">
        <title>{`${title} | Joseph-Vu Trinh`}</title>
        <meta name="description" content={description} />
        <header className="space-y-3">
            <p className="text-sm text-nav-light dark:text-nav-dark">
                Joseph-Vu Trinh · Personal integration
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">{title}</h1>
            <p className="text-nav-light dark:text-nav-dark">{description}</p>
        </header>
        <div className="space-y-8 text-nav-light dark:text-nav-dark [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-text-light dark:[&_h2]:text-text-dark [&_p+p]:mt-3 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-current/40 hover:[&_a]:decoration-current [&_a]:break-words [&_ul]:list-disc [&_ul]:pl-5 [&_li+li]:mt-2">
            {children}
        </div>
        <nav aria-label="Hermes information" className="flex flex-wrap gap-x-6 gap-y-2 border-t border-current/15 pt-5 text-sm">
            <Link className="underline underline-offset-4" to="/hermes">About Hermes</Link>
            <Link className="underline underline-offset-4" to="/hermes/privacy">Privacy policy</Link>
        </nav>
    </article>
    );
};

export default HermesPage;
