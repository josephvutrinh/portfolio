import picture from "../assets/me.jpeg";
import Resume from "../assets/JosephVuTrinh_Resume.pdf";
import { IoLocationOutline } from "react-icons/io5";
import { FiInstagram, FiLinkedin, FiGithub, FiMail, FiMusic } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Spotify from "../components/Spotify";

const socials = [
    { label: "Instagram", href: "https://www.instagram.com/josephvutrinh/", Icon: FiInstagram },
    { label: "LinkedIn", href: "https://linkedin.com/in/josephvutrinh", Icon: FiLinkedin },
    { label: "GitHub", href: "https://github.com/josephvutrinh", Icon: FiGithub },
    { label: "Spotify", href: "https://open.spotify.com/user/reformedkys?si=f2560ea0a7604b29", Icon: FiMusic },
    { label: "Email", href: "mailto:josephvu.06@gmail.com", Icon: FiMail },
];

const skills = ["Python", "Java", "JavaScript", "C", "C++", "Swift", "React", "React Native", "Node.js",
     "MongoDB", "Firebase/Firestore", "AWS", "SQL", "Tailwind CSS", "AI", "Machine Learning"];

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
                    {/* Invisible placeholder reserves the final width so nothing shifts while typing */}
                    <div className="relative mb-3">
                        <h1 aria-hidden="true" className="invisible text-3xl sm:text-4xl font-medium whitespace-nowrap">
                            Hello, I'm Joseph|
                        </h1>
                        <TypeAnimation
                            sequence={["Hello, I'm Joseph"]}
                            wrapper="h1"
                            cursor={true}
                            speed={45}
                            className="absolute inset-0 text-3xl sm:text-4xl font-medium whitespace-nowrap"
                        />
                    </div>
                    <p className="mb-3 text-nav-light dark:text-nav-dark transition-colors duration-500">
                        Full-Stack Software Engineer
                    </p>
                </div>
            </section>

            {/* Socials + CV */}
            <section className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 mt-8 animate-fade-up [animation-delay:120ms]">
                <div className="flex items-center text-2xl sm:text-3xl gap-5 sm:gap-7">
                    {socials.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="hover:scale-115 transition-transform duration-250"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-button-bg-light dark:bg-button-bg-dark px-4 py-2.5 rounded-2xl text-sm font-medium cursor-pointer hover:opacity-80 hover:scale-104 [transition:background-color_.5s,scale_.25s,opacity_.25s]"
                >
                    Download CV
                </a>
            </section>

            {/* Bio */}
            <section className="max-w-lg mx-auto mt-8 animate-fade-up [animation-delay:240ms]">
                <p className="text-center sm:text-left leading-relaxed text-nav-light dark:text-nav-dark transition-colors duration-500">
                    I am currently a computer science student at Virginia Tech, chasing internships in software engineering. 
                    Outside of code, you'll find me on a golf course losing balls in the woods, 
                    getting humbled on the pickleball court, in the gym lifting, or trying not 
                    to fall off a climbing wall.
                </p>
            </section>

            {/* Spotify */}
            <section className="w-full mt-12 animate-fade-up [animation-delay:360ms]">
                <Spotify />
            </section>

            {/* Skills */}
            <section className="w-full mt-12 animate-fade-up [animation-delay:480ms]">
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
            </section>
        </div>
    );
};

export default Home;
