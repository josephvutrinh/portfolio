import picture from "../assets/me.jpeg";
import Resume from "../assets/JosephVuTrinh_Resume.pdf";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Spotify from "../components/Spotify";
import { Link } from "react-router-dom";

const socials = [
    { label: "Instagram", href: "https://www.instagram.com/josephvutrinh/", Icon: FiInstagram },
    { label: "LinkedIn", href: "https://linkedin.com/in/josephvutrinh", Icon: FiLinkedin },
    { label: "GitHub", href: "https://github.com/josephvutrinh", Icon: FiGithub },
    { label: "Spotify", href: "https://open.spotify.com/user/reformedkys?si=f2560ea0a7604b29", Icon: FaSpotify },
    { label: "Email", href: "mailto:josephvutrinh.work@gmail.com", Icon: FiMail },
];

// const skills = ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "Swift",
//     "React", "React Native", "Next.js", "Node.js", "Flask", "FastAPI", "Tailwind CSS",
//     "PostgreSQL", "MongoDB", "Firebase/Firestore", "Docker", "AWS", "GCP", "Git", "CI/CD",
//     "WebSockets", "Machine Learning"];

const hl = "font-medium text-text-light dark:text-text-dark transition-colors duration-500";

const Home = () => {
    return (
        <div className="flex flex-col items-center pb-4">
            {/* Hero */}
            <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-10 mt-8 sm:mt-12 animate-fade-up">
                <img
                    src={picture}
                    alt="Joseph-Vu Trinh"
                    className="rounded-full w-36 h-36 sm:w-44 sm:h-44 object-cover ring-2 ring-black/15 dark:ring-white/20 transition-all duration-500"
                />
                <div className="text-center sm:text-left">
                    <div className="relative mb-3">
                        <h1 aria-hidden="true" className="invisible text-3xl sm:text-4xl font-medium whitespace-nowrap">
                            Hi, I'm Joseph|
                        </h1>
                        <TypeAnimation
                            sequence={["Hi, I'm Joseph"]}
                            wrapper="h1"
                            cursor={true}
                            speed={45}
                            className="absolute inset-0 text-3xl sm:text-4xl font-medium whitespace-nowrap"
                        />
                    </div>
                    <p className="mb-3 text-nav-light dark:text-nav-dark transition-colors duration-500">
                        Incoming SWE Intern @ <b className={hl}>Leidos</b>
                    </p>
                    {/* Socials + CV */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="text-xl hover:scale-115 transition-transform duration-250"
                            >
                                <Icon />
                            </a>
                        ))}
                        <a
                            href={Resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-button-bg-light dark:bg-button-bg-dark px-3 py-1.5 rounded-2xl text-sm font-medium cursor-pointer hover:opacity-80 hover:scale-104 [transition:background-color_.5s,scale_.25s,opacity_.25s]"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <section className="w-full mt-8 space-y-3 text-center sm:text-left leading-relaxed text-nav-light dark:text-nav-dark transition-colors duration-500 animate-fade-up [animation-delay:240ms]">
                <p>
                    Hey, I'm <b className={hl}>Joe</b>! I'm a third-year CS student at <b className={hl}>Virginia Tech</b> who 
                    likes building and learning new things. Lately, I've been building the <b className={hl}>backend</b> for VT's <b className={hl}>SQL learning platform</b>, and working 
                    on <Link to="/projects" className={`${hl} underline underline-offset-4 decoration-nav-light/60 dark:decoration-nav-dark/60 hover:decoration-current`}>software projects</Link> on the side.
                </p>
                <p>
                    Outside of coding, you'll find me lifting, playing pickle with my buddies, climbing, or
                    hanging out with my two cats, <b className={hl}>Earl</b> and <b className={hl}>Gray</b>. I also love trying new things, and picking up new hobbies.
                </p>
            </section>

            {/* Skills */}
            {/* <section className="w-full mt-12 animate-fade-up [animation-delay:480ms]">
                <h2 className="text-xl font-medium mb-5">Skills and Technologies</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="bg-button-bg-light dark:bg-button-bg-dark px-4 py-2 rounded-2xl text-sm font-medium [transition:background-color_.5s]"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section> */}

            {/* Spotify */}
            <section className="w-full mt-12 animate-fade-up [animation-delay:360ms]">
                <Spotify />
            </section>
        </div>
    );
};

export default Home;
