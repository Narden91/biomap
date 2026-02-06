import React, { useEffect, useRef, memo, useMemo } from 'react';
import {
    Brain, Network, Zap, Cpu, Activity, Share2,
    GitMerge, Layers, Search, Eye, Users,
    RefreshCw, Box, Globe, Dna
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Static data moved outside component to avoid recreation on each render
const bentoSizes = [
    { cols: 5, rows: 2 },  // 1 - large hero
    { cols: 3, rows: 1 },  // 2 - small accent
    { cols: 4, rows: 2 },  // 3 - large hero
    { cols: 3, rows: 1 },  // 4 - small accent
    { cols: 3, rows: 1 },  // 5 - standard
    { cols: 6, rows: 1 },  // 6 - wide feature
    { cols: 3, rows: 1 },  // 7 - standard
    { cols: 3, rows: 1 },  // 8 - standard
    { cols: 6, rows: 1 },  // 9 - wide feature
    { cols: 3, rows: 1 },  // 10 - standard
    { cols: 4, rows: 1 },  // 11 - standard
    { cols: 4, rows: 1 },  // 12 - standard
    { cols: 4, rows: 1 },  // 13 - standard
    { cols: 6, rows: 1 },  // 14 - wide
    { cols: 6, rows: 1 },  // 15 - wide
];

const glassVariants = ['glass-panel', 'glass-sage', 'glass-lavender'];

const topics = [
    { title: "Evolutionary neural architecture discovery", content: "Genetic algorithms, genetic programming, and evolution strategies for discovering new structures.", icon: Network },
    { title: "Swarm intelligence for distributed patterns", content: "Particle swarm optimisation for feature selection; ant colony algorithms for segmentation.", icon: Share2 },
    { title: "Self-organising and adaptive vision", content: "Adaptive resonance theory for continual learning; self-organising maps for visual clustering.", icon: Activity },
    { title: "Artificial life and emergent patterns", content: "Evolution of visual behaviours; emergent feature detectors; artificial immune systems.", icon: Dna },
    { title: "Evolutionary multi-objective optimisation", content: "Pareto-optimal solutions for accuracy-efficiency trade-offs in computer vision.", icon: Layers },
    { title: "Bio-inspired learning paradigms", content: "Evolutionary few-shot/zero-shot learning; genetic programming for data augmentation.", icon: Brain },
    { title: "Hybrid evolutionary-gradient methods", content: "Evolutionary initialisation of deep networks; population-based training strategies.", icon: GitMerge },
    { title: "Neuromorphic evolutionary systems", content: "Evolution of spiking neural networks; bio-plausible learning rules through evolution.", icon: Cpu },
    { title: "Collective intelligence for large-scale analysis", content: "Distributed evolutionary algorithms for big visual data; federated evolutionary learning.", icon: Users },
    { title: "Dynamic and online evolutionary adaptation", content: "Real-time evolutionary tracking; adaptive evolution in non-stationary environments.", icon: RefreshCw },
    { title: "Evolutionary robotics and embodied vision", content: "Co-evolution of morphology and visual processing; evolutionary active vision strategies.", icon: Eye },
    { title: "Quantum-inspired evolutionary recognition", content: "Quantum evolutionary algorithms for feature selection; quantum swarm optimisation.", icon: Zap },
    { title: "Evolutionary explainability", content: "Genetic programming for interpretable models; evolutionary visualisation of decision boundaries.", icon: Search },
    { title: "Bio-inspired hardware-software co-evolution", content: "Evolutionary design of vision processors; DNA computing for pattern matching.", icon: Box },
    { title: "Applications and grand challenges", content: "Medical imaging, autonomous driving, remote sensing, biometrics, and industrial inspection.", icon: Globe },
];

// Memoized tile component - prevents re-render when parent updates
const TopicTile = memo(({ number, title, content, icon: Icon, size }) => {
    const glassClass = glassVariants[number % 3];

    return (
        <div
            className={`bento-tile ${glassClass} scroll-reveal`}
            style={{
                gridColumn: `span ${size.cols}`,
                gridRow: `span ${size.rows}`,
            }}
        >
            <Icon className="bento-icon-bg" strokeWidth={0.5} />
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 bg-white/40 rounded-xl backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-sage-700" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold text-sage-500/80 font-mono-accent px-2.5 py-1 bg-white/30 rounded-full backdrop-blur-sm">
                        #{String(number).padStart(2, '0')}
                    </span>
                </div>
                <h3 className="text-base font-display font-bold text-gray-900 mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-sm text-gray-700/90 leading-relaxed flex-grow">
                    {content}
                </p>
            </div>
        </div>
    );
});

TopicTile.displayName = 'TopicTile';

const Home = () => {
    const topicsRef = useRef(null);
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    // Scroll reveal effect - tiles reveal individually as they enter viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add revealed class with a small delay based on element position
                        entry.target.classList.add('revealed');
                        // Stop observing once revealed
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
            }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Parallax effect - optimized with passive listener
    useEffect(() => {
        const hero = heroRef.current;
        const bg = bgRef.current;

        if (!hero || !bg) return;

        let requestID;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        const lerp = 0.15;

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        };

        const updateParallax = () => {
            currentX += (mouseX - currentX) * lerp;
            currentY += (mouseY - currentY) * lerp;

            if (bg) {
                bg.style.transform = `translate(${currentX * -20}px, ${currentY * -20}px)`;
            }

            requestID = requestAnimationFrame(updateParallax);
        };

        hero.addEventListener('mousemove', handleMouseMove, { passive: true });
        requestID = requestAnimationFrame(updateParallax);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestID);
        };
    }, []);

    // Memoize topic tiles to prevent recreation
    const topicTiles = useMemo(() =>
        topics.map((topic, index) => (
            <TopicTile
                key={topic.title}
                number={index + 1}
                title={topic.title}
                content={topic.content}
                icon={topic.icon}
                size={bentoSizes[index]}
            />
        )),
        []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden"
            >
                <div
                    ref={bgRef}
                    className="absolute inset-0 z-0 scale-110"
                    style={{
                        backgroundImage: `url(${import.meta.env.BASE_URL}BIOMAP.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                        transform: 'translate(0px, 0px)'
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-transparent to-transparent pointer-events-none z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 md:py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 glass-panel-strong rounded-3xl p-6 md:p-8 backdrop-blur-xl border-white/20 shadow-2xl animate-fade-up">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-50/90 text-sage-800 text-sm font-semibold mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                                Workshop at ICPR 2026
                            </div>
                            <h2 className="text-sage-900 font-display font-medium text-lg md:text-xl tracking-wide opacity-90">
                                BIO-inspired Methods for Pattern Recognition
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/submission"
                                className="focus-ring px-8 py-3 bg-coral-500 text-white rounded-xl font-display font-semibold hover:bg-coral-600 transition-all duration-300 shadow-lg hover:shadow-coral-500/30 hover:scale-105 active:scale-95"
                            >
                                Submit Paper
                            </Link>
                            <Link
                                to="/schedule"
                                className="focus-ring px-8 py-3 bg-white text-sage-900 rounded-xl font-display font-semibold hover:bg-sage-50 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                            >
                                View Schedule
                            </Link>
                            <a
                                href={import.meta.env.BASE_URL + 'CFP_BIOMAP.pdf'}
                                download
                                className="focus-ring px-8 py-3 bg-sage-600 text-white rounded-xl font-display font-semibold hover:bg-sage-700 transition-all duration-300 shadow-lg hover:shadow-sage-600/30 hover:scale-105 active:scale-95"
                            >
                                Call for Paper
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <section className="py-24 bg-canvas relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-reveal">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Motivation & Rationale</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-sage-400 to-coral-400 mx-auto rounded-full" />
                    </div>

                    <div className="glass-panel-strong rounded-3xl p-8 md:p-12 shadow-2xl scroll-reveal">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-6 leading-relaxed">
                                Pattern recognition systems in nature show strong abilities through evolutionary adaptation and self-organisation,
                                from the visual cortex's layered feature learning to the group behaviour of swarm organisms. This has led to a
                                link between evolutionary computation and pattern recognition that goes beyond standard optimisation methods.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                Recent work shows this link: evolutionary algorithms find new neural structures that perform better than those
                                designed by people, swarm methods allow shared visual processing across devices, and self-organising systems
                                adjust to changing pattern sets in real time.
                            </p>

                            <div className="glass-sage rounded-2xl p-6 border-l-4 border-sage-500 my-8">
                                <p className="font-medium text-sage-900 italic leading-relaxed">
                                    "The workshop comes at a good time, as the pattern recognition field sees that biological ideas can solve key
                                    problems, including loss of prior knowledge, ongoing learning, strength against data changes, and effective
                                    use of limited resources."
                                </p>
                            </div>

                            <p className="leading-relaxed">
                                This workshop sets bio-inspired intelligence as a core approach for future pattern recognition systems,
                                gathering views from evolutionary computation, swarm intelligence, artificial life, and neuromorphic computing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-24 gradient-mesh border-t border-white/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Workshop Topics</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                            Exploring the intersection where biology and computation meet to solve complex pattern recognition challenges.
                        </p>
                    </div>

                    <div className="bento-grid" ref={topicsRef}>
                        {topicTiles}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
