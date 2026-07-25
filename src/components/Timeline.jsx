const Timeline = ({ items }) => {
    return (
        <div className="relative">
            <div className="absolute left-5 top-2 bottom-0 w-px bg-gradient-to-b from-nav-light/40 via-nav-light/40 to-transparent dark:from-nav-dark/40 dark:via-nav-dark/40"></div>
            <div className="flex flex-col gap-10">
                {items.map((item, i) => (
                    <div key={i} className="relative flex gap-4">
                        <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="relative z-10 w-10 h-10 rounded-full object-cover bg-white ring-2 ring-black/15 dark:ring-white/20 shrink-0 transition-all duration-500"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3">
                                <p className="font-medium leading-snug">{item.company}</p>
                                <p className="text-xs whitespace-nowrap text-nav-light dark:text-nav-dark transition-colors duration-500">
                                    {item.dates}
                                </p>
                            </div>
                            <p className="text-sm text-nav-light dark:text-nav-dark transition-colors duration-500">
                                {item.role}
                            </p>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-nav-light dark:text-nav-dark transition-colors duration-500">
                                {item.bullets.map((bullet, j) => (
                                    <li key={j}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
