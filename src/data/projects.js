import hokiefessor from "../assets/projects/hokiefessor.png";
import posturite from "../assets/projects/posturite.png";
import playlisteditor from "../assets/projects/playlisteditor.png";
import ridehub from "../assets/projects/ridehub.png";
import lift from "../assets/projects/lift.png";

export const projects = [
    {
        image: playlisteditor,
        title: "Playlist Curator",
        description: "AI tool that scores tracks against your theme and diffs the changes before applying.",
        tech: ["React", "TypeScript", "FastAPI", "Anthropic API", "Spotify Web API", "librosa"],
        url: "https://github.com/josephvutrinh/playlist-editor",
    },
    {
        image: lift,
        title: "LIFT",
        description: "Mobile app for logging workouts and tracking lifting progress.",
        tech: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
        url: "https://github.com/josephvutrinh/LIFT",
    },
    {
        image: hokiefessor,
        title: "Hokiefessor",
        description: "AI class picker using grade data and professor reviews to derisk your schedule.",
        tech: ["Python", "React", "Databricks Agent Bricks", "GraphQL"],
        url: "https://github.com/josephvutrinh/Hokiefessor",
    },
    {
        image: posturite,
        title: "Posturite",
        description: "Real-time posture detection using webcam pose tracking.",
        tech: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
        url: "https://github.com/josephvutrinh/Posturite",
    },
    {
        image: ridehub,
        title: "RideHub",
        description: "Compares Uber and Lyft fares and recommends the cheapest ride available.",
        tech: ["JavaScript", "React Native", "Google Maps API", "Gemini API"],
        url: "https://github.com/josephvutrinh/RideHub",
    },
];
