import vtLogo from "../assets/timeline/vt.png";
import lifetimeLogo from "../assets/timeline/lifetime.webp";
import saseLogo from "../assets/timeline/sase.png";
import engaugeLogo from "../assets/timeline/engauge.png";

export const experiences = [
    {
        logo: saseLogo,
        company: "SASE @ Virginia Tech",
        role: "Web Developer",
        dates: "Jan 2026 - June 2026",
        bullets: ["Migrated the club's React codebase to Tailwind CSS and rebuilt 10+ components for a mobile-first redesign."],
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Software Developer",
        dates: "June 2026 - Present",
        bullets: ["Extended VT's SQL learning platform to an iOS app, while adding new features and improving performance."],
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Undergraduate Researcher",
        dates: "Jan 2026 - June 2026",
        bullets: ["Built a pose/gaze ML pipeline to classify student engagement from classroom video"]
    },
    {
        logo: vtLogo,
        company: "Virginia Tech Department of Computer Science",
        role: "Undergraduate Teaching Assistant",
        dates: "Jan 2026 - May 2026",
        bullets: ["Helped students weekly with data structures/OOP through labs, office hours, and debugging support."],
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
        bullets: ["Saving lives"],
    },
];
