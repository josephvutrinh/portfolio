import vtLogo from "../assets/timeline/vt.png";
import lifetimeLogo from "../assets/timeline/lifetime.webp";
import saseLogo from "../assets/timeline/sase.png";
import engaugeLogo from "../assets/timeline/engauge.png";

export const experiences = [
    {
        logo: saseLogo,
        company: "SASE @ Virginia Tech",
        role: "Web Developer",
        dates: "July 2026 - Present",
        bullets: ["Built the club's new website from scratch, and maintaining it with upcoming events and images"],
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Software Developer",
        dates: "June 2026 - Present",
        bullets: ["Extending VT's SQL learning platform to an iOS app, while adding new features and improving performance."],
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Undergraduate Teaching Assistant",
        dates: "Jan 2026 - Present",
        bullets: ["CS 1114: Intro to Software Design", "CS 3114: Data Structures and Algorithms", "Helped students weekly with data structures/OOP through labs, office hours, and debugging support."],
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Undergraduate Researcher",
        dates: "Jan 2026 - June 2026",
        bullets: ["Built a pose/gaze ML pipeline to classify student engagement from classroom video."]
    },
    {
        logo: engaugeLogo,
        company: "Engauge",
        role: "Full Stack Developer Intern",
        dates: "Sep 2024 - Dec 2024",
        bullets: ["Rebuilt a classroom app's front-end in React and shipped a real-time collaborative whiteboard used by 150+ students."],
    },
    {
        logo: lifetimeLogo,
        company: "Lifetime Fitness",
        role: "Lifeguard",
        dates: "Jan 2023 - Aug 2024",
        bullets: ["Saving lives."],
    },
];
