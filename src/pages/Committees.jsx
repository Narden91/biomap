import React, { memo } from 'react';
import PageHeader from '../components/PageHeader';
import { Users, GraduationCap, MapPin, ExternalLink } from 'lucide-react';

// Memoized card component - prevents re-render when parent updates
const OrganizerCard = memo(({ name, role, title, affiliation, bio, imageUrl, profileUrl }) => (
    <div className="bg-white rounded-2xl p-8 border border-sage-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-md"
                />
            </div>
            <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-gray-900">{name}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-coral-50 text-coral-700 mt-2 md:mt-0 w-fit">
                        {role}
                    </span>
                </div>
                <p className="text-sage-600 font-medium mb-4 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> {title}
                    <span className="mx-2 text-gray-300">|</span>
                    <MapPin className="h-4 w-4" /> {affiliation}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                    {bio}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                    <a 
                        href={profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sage-600 text-sm font-medium hover:text-sage-800 flex items-center gap-1 transition-colors"
                    >
                        View Profile <ExternalLink className="h-3 w-3" />
                    </a>
                </div>
            </div>
        </div>
    </div>
));

OrganizerCard.displayName = 'OrganizerCard';

// Static data defined outside component to avoid recreation on each render
const organizers = [
    {
        name: "Francesco Fontanella",
        role: "Program Co-Chair",
        title: "Associate Professor",
        affiliation: "University of Cassino and Southern Lazio",
        imageUrl: `${import.meta.env.BASE_URL}fontanella.jpg`,
        profileUrl: "https://sites.google.com/unicas.it/fontanella/",
        bio: "Currently an associate professor at the Department of Electrical and Information Engineering. In his research activity, he mainly deals with the use of machine learning techniques for the implementation of tools based on handwriting analysis for the prediction of neurodegenerative diseases and with the resolution of machine learning and Pattern Recognition problems by means of evolutionary algorithms. He is the author of over 100 research papers published in scientific journals and international conference proceedings."
    },
    {
        name: "Emanuele Nardone",
        role: "Program Co-Chair",
        title: "Researcher",
        affiliation: "University of Cassino and Southern Lazio",
        imageUrl: `${import.meta.env.BASE_URL}nardone.jpg`,
        profileUrl: "https://narden91.github.io/curriculumwebsite/",
        bio: "Received the Master Degree cum laude in Computer Science Engineering and the Ph.D. degree in Methods, Models and Technologies for Engineering from the University of Cassino and Southern Lazio, Italy. He is currently a Researcher in Computer Science in the Department of Electrical and Information Engineering. He is affiliated with the Artificial Intelligence and Data Analysis Lab and is a member of the Italian Association for Computer Vision, Pattern Recognition, and Machine Learning (CVPL). His research focuses on applying AI techniques to support the diagnosis of neurodegenerative diseases and addressing optimization problems with a particular emphasis on evolutionary algorithms."
    },
    {
        name: "Leonardo Vanneschi",
        role: "Program Co-Chair",
        title: "Full Professor",
        affiliation: "NOVA IMS, Universidade Nova de Lisboa",
        imageUrl: `${import.meta.env.BASE_URL}vanneschi.jpg`,
        profileUrl: "https://www.novaims.unl.pt/pt/a-nova-ims/docentes/d/69",
        bio: "Holds a summa cum laude Master's degree in Computer Science from the University of Pisa and a Ph.D. from the University of Lausanne. Since 2019, he has been a Full Professor at NOVA IMS. His research focuses on Machine Learning, Data Science, Complex Systems, and particularly Evolutionary Computation. He has published over 200 works, received multiple international awards, led several research projects, served on editorial and conference committees. In 2015, he received the EvoStar award for outstanding contributions to Evolutionary Computation."
    }
];

const Committees = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Committees"
                subtitle="Meet the Program Co-Chairs leading the BIOMAP Workshop."
                icon={Users}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
                {organizers.map((org) => (
                    <OrganizerCard key={org.name} {...org} />
                ))}
            </div>
        </div>
    );
};

export default Committees;
