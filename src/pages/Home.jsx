import picture from "../assets/picture.jpeg";
import { IoLocationSharp, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMail} from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";
import Resume from "../assets/Joseph_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

const Home = ({ darkMode }) => {
    return (
        <div className={`main-home-div min-h-screen`}>
            <div className="flex justify-center items-center mb-10 mt-10 gap-10">
                <img src={picture} alt="Profile" className="rounded-full w-45 h-45 object-cover" />
                <div className={`text-left ${darkMode ? "text-text-dark" : "text-text-light"}`}>
                    <TypeAnimation
                        sequence={[
                            "Hello, I'm Joseph"
                        ]}
                        wrapper="h1"
                        cursor={true}
                        speed={45}
                        className="text-4xl mb-4"
                    />
                    <p className="mb-4">Full-Stack Software Engineer</p>
                    <p className="flex items-center gap-1">
                    <IoLocationSharp className="text-xl" aria-hidden="true" />Blacksburg, VA
                    </p>
                </div>
            </div>
            <div className={`flex justify-center mb-10 mt-10 gap-7 ${darkMode ? "text-text-dark" : "text-text-light"}`}>
                <div className="flex items-center text-4xl gap-7">
                    <a 
                    href="https://linkedin.com/in/josephvutrinh" target="_blank" rel="noopener noreferrer" 
                    className="hover:scale-115 transition:transform duration-250">
                    <IoLogoLinkedin />
                    </a>
                    <a 
                    href="https://github.com/josephvutrinh" target="_blank" rel="noopener noreferrer" 
                    className="hover:scale-115 transition:transform duration-250">
                    <IoLogoGithub />
                    </a>
                    <a 
                    href="https://www.instagram.com/josephvutrinh/" target="_blank" rel="noopener noreferrer" 
                    className="hover:scale-115 transition:transform duration-250">
                    <IoLogoInstagram />
                    </a>
                    <a 
                    href="https://open.spotify.com/user/reformedkys?si=f2560ea0a7604b29" target="_blank" rel="noopener noreferrer" 
                    className="hover:scale-115 transition:transform duration-250">
                    <FaSpotify />
                    </a>
                    <a 
                    href="mailto:josephvu.06@gmail.com" 
                    className="hover:scale-115 transition:transform duration-250">
                    <IoMail />
                    </a>
                </div>
                <div className={`${darkMode ? "bg-button-bg-dark" : "bg-button-bg-light"} cursor-pointer p-2.5 rounded-2xl hover:opacity-80 hover:scale-104 transition:transform transition-colors duration-250`}>
                    <a href={Resume} target="_blank">
                        <button className="text-m font-medium cursor-pointer">Download CV</button>
                    </a>
                </div>
            </div>
            <div className="text-center max-w-lg mx-auto">
                <p className={`${darkMode ? "text-nav-dark" : "text-nav-light"}`}>
                    I'm a dedicated and passionate full-stack software engineer 
                    and a second-year Computer Science student at Virginia Tech. 
                    I'm driven by a love for creating robust and intuitive applications. 
                    When I'm not coding, you can find me on the golf course, playing 
                    pickleball, at the gym, or watching a game (when theres money on the line).
                </p>
            </div>
        </div>
    )
}

export default Home