import React, { useEffect, useRef } from 'react';
import {
    Brain, Network, Zap, Cpu, Activity, Share2,
    GitMerge, Layers, Search, Eye, Users,
    Database, RefreshCw, Box, Globe, Dna
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Bento grid tile sizes configuration
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

const TopicTile = ({ number, title, content, icon: Icon, size }) => {
    const glassVariants = ['glass-panel', 'glass-sage', 'glass-lavender'];
    const glassClass = glassVariants[number % 3];

    return (
        <div
            className={`bento-tile ${glassClass} scroll-reveal`}
            style={{
                gridColumn: `span ${size.cols}`,
                gridRow: `span ${size.rows}`,
            }}
        >
            {/* Large icon background */}
            <Icon className="bento-icon-bg" strokeWidth={0.5} />

            {/* Content */}
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
};

const Home = () => {
    const topicsRef = useRef(null);

    const topics = [
        {
            title: "Evolutionary neural architecture discovery",
            content: "Genetic algorithms, genetic programming, and evolution strategies for discovering new structures.",
            icon: Network
        },
        {
            title: "Swarm intelligence for distributed patterns",
            content: "Particle swarm optimisation for feature selection; ant colony algorithms for segmentation.",
            icon: Share2
        },
        {
            title: "Self-organising and adaptive vision",
            content: "Adaptive resonance theory for continual learning; self-organising maps for visual clustering.",
            icon: Activity
        },
        {
            title: "Artificial life and emergent patterns",
            content: "Evolution of visual behaviours; emergent feature detectors; artificial immune systems.",
            icon: Dna
        },
        {
            title: "Evolutionary multi-objective optimisation",
            content: "Pareto-optimal solutions for accuracy-efficiency trade-offs in computer vision.",
            icon: Layers
        },
        {
            title: "Bio-inspired learning paradigms",
            content: "Evolutionary few-shot/zero-shot learning; genetic programming for data augmentation.",
            icon: Brain
        },
        {
            title: "Hybrid evolutionary-gradient methods",
            content: "Evolutionary initialisation of deep networks; population-based training strategies.",
            icon: GitMerge
        },
        {
            title: "Neuromorphic evolutionary systems",
            content: "Evolution of spiking neural networks; bio-plausible learning rules through evolution.",
            icon: Cpu
        },
        {
            title: "Collective intelligence for large-scale analysis",
            content: "Distributed evolutionary algorithms for big visual data; federated evolutionary learning.",
            icon: Users
        },
        {
            title: "Dynamic and online evolutionary adaptation",
            content: "Real-time evolutionary tracking; adaptive evolution in non-stationary environments.",
            icon: RefreshCw
        },
        {
            title: "Evolutionary robotics and embodied vision",
            content: "Co-evolution of morphology and visual processing; evolutionary active vision strategies.",
            icon: Eye
        },
        {
            title: "Quantum-inspired evolutionary recognition",
            content: "Quantum evolutionary algorithms for feature selection; quantum swarm optimisation.",
            icon: Zap
        },
        {
            title: "Evolutionary explainability",
            content: "Genetic programming for interpretable models; evolutionary visualisation of decision boundaries.",
            icon: Search
        },
        {
            title: "Bio-inspired hardware-software co-evolution",
            content: "Evolutionary design of vision processors; DNA computing for pattern matching.",
            icon: Box
        },
        {
            title: "Applications and grand challenges",
            content: "Medical imaging, autonomous driving, remote sensing, biometrics, and industrial inspection.",
            icon: Globe
        },
    ];

    // Scroll reveal effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section - Glassmorphic */}
            <section className="gradient-mesh noise-overlay py-24 md:py-32 border-b border-white/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    {/* Badge */}
                    <div className="hero-title inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sage-700 text-sm font-medium mb-8 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse"></span>
                        Workshop at Scientific Conference 2026
                    </div>

                    {/* Title - Glass Panel */}
                    <div className="hero-subtitle glass-panel-strong rounded-3xl px-8 md:px-12 py-12 md:py-16 mb-8 max-w-5xl mx-auto shadow-2xl">
                        <h1 className="text-6xl md:text-8xl font-display font-extrabold text-sage-900 mb-6 tracking-tight">
                            BIOMAP
                        </h1>
                        <p className="text-xl md:text-2xl text-sage-700 max-w-3xl mx-auto font-light leading-relaxed">
                            Bio-Inspired Intelligence for Adaptive Pattern Recognition: <br className="hidden md:block" />
                            From Evolutionary Computing to Self-Organising Vision Systems
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="hero-cta flex flex-wrap justify-center gap-4">
                        <Link
                            to="/submission"
                            className="focus-ring px-8 py-4 glass-sage rounded-2xl font-display font-semibold text-sage-900 hover:bg-sage-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                        >
                            Submit Paper
                        </Link>
                        <Link
                            to="/schedule"
                            className="focus-ring px-8 py-4 glass-panel rounded-2xl font-display font-semibold text-sage-700 hover:glass-panel-strong transition-all duration-300 shadow-lg"
                        >
                            View Schedule
                        </Link>
                    </div>
                </div>
            </section>

            {/* Motivation Section - Floating Glass */}
            <section className="py-24 bg-canvas relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-reveal">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Motivation & Rationale</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-sage-400 to-coral-400 mx-auto rounded-full"></div>
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

            {/* Topics Section - Bento Grid */}
            <section className="py-24 gradient-mesh border-t border-white/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Workshop Topics</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                            Exploring the intersection where biology and computation meet to solve complex pattern recognition challenges.
                        </p>
                    </div>

                    <div className="bento-grid" ref={topicsRef}>
                        {topics.map((topic, index) => (
                            <TopicTile
                                key={index}
                                number={index + 1}
                                title={topic.title}
                                content={topic.content}
                                icon={topic.icon}
                                size={bentoSizes[index]}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
