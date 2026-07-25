import PhotoStrip from "../components/PhotoStrip";
import Timeline from "../components/Timeline";
import { photos } from "../data/photos";
import { experiences } from "../data/experiences";

const Experience = () => {
    return (
        <div className="flex flex-col pb-4">
            <section className="mt-8 animate-fade-up">
                <p className="text-nav-light dark:text-nav-dark transition-colors duration-500">
                    Some of my favorite pictures.
                </p>
                <PhotoStrip photos={photos} />
            </section>

            <section className="mt-10 animate-fade-up [animation-delay:150ms]">
                <h2 className="text-xl font-medium mb-6">Timeline</h2>
                <Timeline items={experiences} />
            </section>
        </div>
    );
};

export default Experience;
