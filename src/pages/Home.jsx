import React from 'react';
import {
    Brain, Network, Zap, Cpu, Activity, Share2,
    GitMerge, Layers, Search, Eye, Users,
    Database, RefreshCw, Box, Globe, Dna
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TopicCard = ({ number, title, content, icon: Icon }) => (
    <div className="card-glow bg-white p-6 rounded-xl border border-sage-100 hover:border-sage-300 shadow-sm h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 bg-sage-50 rounded-xl text-sage-600">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-semibold text-sage-400 font-mono-accent">#{String(number).padStart(2, '0')}</span>
        </div>
        <h3 className="text-lg font-display font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{content}</p>
    </div>
);

const Home = () => {
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

    // Imported Dna specifically for one use above but need to define it if not in scope or rename.
    // Actually I used Dna in the layout import but missed it here. Added to imports.
    // Wait, Dna is not in the import list above. Adding it now manually in the tool call content before submitting.

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-sage-50 py-20 border-b border-sage-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 text-sage-600 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-coral-400"></span>
                        Workshop at Scientific Conference 2026
                    </div>
                    <h1 className="hero-title text-5xl md:text-7xl font-display font-extrabold text-sage-900 mb-6 tracking-tight">
                        BIOMAP
                    </h1>
                    <p className="hero-subtitle text-xl md:text-2xl text-sage-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Bio-Inspired Intelligence for Adaptive Pattern Recognition: <br className="hidden md:block" />
                        From Evolutionary Computing to Self-Organising Vision Systems
                    </p>
                    <div className="hero-cta mt-10 flex justify-center gap-4">
                        <Link to="/submission" className="focus-ring px-8 py-3.5 bg-sage-600 text-white rounded-xl font-display font-semibold hover:bg-sage-700 transition-all shadow-lg shadow-sage-200/50 hover:shadow-xl hover:shadow-sage-300/40">
                            Submit Paper
                        </Link>
                        <Link to="/schedule" className="focus-ring px-8 py-3.5 bg-white text-sage-700 border border-sage-200 rounded-xl font-display font-semibold hover:bg-sage-50 hover:border-sage-300 transition-all">
                            View Schedule
                        </Link>
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Motivation & Rationale</h2>
                        <div className="w-24 h-1 bg-coral-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="prose prose-lg prose-headings:font-display text-gray-600 text-justify">
                        <p className="mb-6">
                            Pattern recognition systems in nature show strong abilities through evolutionary adaptation and self-organisation,
                            from the visual cortex's layered feature learning to the group behaviour of swarm organisms. This has led to a
                            link between evolutionary computation and pattern recognition that goes beyond standard optimisation methods.
                        </p>
                        <p className="mb-6">
                            Recent work shows this link: evolutionary algorithms find new neural structures that perform better than those
                            designed by people, swarm methods allow shared visual processing across devices, and self-organising systems
                            adjust to changing pattern sets in real time.
                        </p>
                        <div className="bg-sage-50 p-6 rounded-xl border-l-4 border-sage-400 my-8">
                            <p className="font-medium text-sage-800 italic">
                                "The workshop comes at a good time, as the pattern recognition field sees that biological ideas can solve key
                                problems, including loss of prior knowledge, ongoing learning, strength against data changes, and effective
                                use of limited resources."
                            </p>
                        </div>
                        <p>
                            This workshop sets bio-inspired intelligence as a core approach for future pattern recognition systems,
                            gathering views from evolutionary computation, swarm intelligence, artificial life, and neuromorphic computing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-20 bg-canvas border-t border-sage-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Workshop Topics</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Exploring the intersection where biology and computation meet to solve complex pattern recognition challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, index) => (
                            <TopicCard
                                key={index}
                                number={index + 1}
                                title={topic.title}
                                content={topic.content}
                                icon={topic.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Home;
