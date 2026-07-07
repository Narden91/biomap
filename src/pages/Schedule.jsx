import { createElement, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { workshopDetails, workshopProgram } from '../data/workshopProgram';
import {
    Building2,
    Calendar,
    CalendarClock,
    ChevronDown,
    Clock,
    Coffee,
    FileText,
    MapPin,
    Mic2,
    Sparkles,
    Users,
} from 'lucide-react';

const summaryCards = [
    {
        label: 'Date',
        value: workshopDetails.date,
        detail: 'Full morning workshop',
        icon: Calendar,
        tone: 'sage',
    },
    {
        label: 'Time',
        value: workshopDetails.time,
        detail: workshopDetails.formatNote,
        icon: Clock,
        tone: 'coral',
    },
    {
        label: 'Room',
        value: workshopDetails.room,
        detail: workshopDetails.venue,
        icon: Building2,
        tone: 'lavender',
    },
    {
        label: 'Venue',
        value: workshopDetails.city,
        detail: `${workshopDetails.conference} · ${workshopDetails.conferenceName}`,
        icon: MapPin,
        tone: 'dark',
    },
];

const summaryToneClasses = {
    sage: 'border-sage-100 bg-white text-sage-700',
    coral: 'border-coral-100 bg-coral-50/70 text-coral-700',
    lavender: 'border-lavender-100 bg-lavender-50 text-lavender-700',
    dark: 'border-sage-800 bg-sage-900 text-white',
};

const iconToneClasses = {
    sage: 'bg-sage-50 text-sage-600',
    coral: 'bg-white text-coral-600',
    lavender: 'bg-white text-lavender-700',
    dark: 'bg-white/10 text-sage-200',
};

const blockStyles = {
    opening: {
        icon: Sparkles,
        marker: 'bg-sage-100 text-sage-700 ring-sage-200',
        eyebrow: 'text-sage-600',
        accent: 'border-sage-200 bg-sage-50/50',
    },
    invited: {
        icon: Mic2,
        marker: 'bg-coral-100 text-coral-700 ring-coral-200',
        eyebrow: 'text-coral-600',
        accent: 'border-coral-200 bg-coral-50/60',
    },
    break: {
        icon: Coffee,
        marker: 'bg-lavender-100 text-lavender-700 ring-lavender-200',
        eyebrow: 'text-lavender-700',
        accent: 'border-lavender-200 bg-lavender-50/70',
    },
    session: {
        icon: Users,
        marker: 'bg-white text-sage-700 ring-sage-200',
        eyebrow: 'text-sage-600',
        accent: 'border-sage-200 bg-white',
    },
};

const SummaryCard = ({ label, value, detail, icon, tone }) => (
    <article className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${summaryToneClasses[tone]}`}>
        <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${iconToneClasses[tone]}`}>
            {createElement(icon, { className: 'h-5 w-5', strokeWidth: 2.2 })}
        </div>
        <p className={`mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] ${tone === 'dark' ? 'text-sage-300' : 'text-sage-500'}`}>
            {label}
        </p>
        <h2 className={`text-2xl font-display font-bold leading-tight ${tone === 'dark' ? 'text-white' : 'text-sage-900'}`}>
            {value}
        </h2>
        <p className={`mt-3 text-sm leading-relaxed ${tone === 'dark' ? 'text-sage-200' : 'text-sage-600'}`}>
            {detail}
        </p>
    </article>
);

const ProgramBlock = ({ block, expandedAbstracts, onToggleAbstract }) => {
    const styles = blockStyles[block.type];

    return (
        <section
            className="relative grid gap-5 pb-10 last:pb-0 md:grid-cols-[9rem_1fr]"
            aria-labelledby={`${block.id}-title`}
        >
            <div className="md:text-right">
                <div className="sticky top-28 inline-flex items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span className="font-mono-accent text-sm font-bold text-sage-700">{block.time}</span>
                    <span className="h-px w-10 bg-sage-200 md:h-10 md:w-px" aria-hidden="true" />
                </div>
            </div>

            <div className="relative pl-12 md:pl-14">
                <div className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full ring-4 ${styles.marker}`}>
                    {createElement(styles.icon, { className: 'h-4 w-4' })}
                </div>
                <div className={`rounded-2xl border px-5 py-5 md:px-7 ${styles.accent}`}>
                    <p className={`mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] ${styles.eyebrow}`}>
                        {block.label}
                    </p>
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h2 id={`${block.id}-title`} className="text-2xl font-display font-bold text-sage-900">
                                {block.title}
                            </h2>
                            {block.speaker && (
                                <p className="mt-2 text-lg font-semibold text-coral-700">{block.speaker}</p>
                            )}
                            {block.description && (
                                <p className="mt-2 max-w-3xl text-base leading-relaxed text-sage-600">
                                    {block.description}
                                </p>
                            )}
                        </div>
                        {block.type === 'session' && (
                            <span className="inline-flex w-fit items-center rounded-full border border-sage-200 bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-sage-600">
                                {block.papers.length} talks
                            </span>
                        )}
                    </div>

                    {block.papers?.length > 0 && (
                        <div className="mt-6 space-y-4">
                            {block.papers.map((paper) => (
                                <PaperCard
                                    key={paper.id}
                                    paper={paper}
                                    isExpanded={Boolean(expandedAbstracts[paper.id])}
                                    onToggle={() => onToggleAbstract(paper.id)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const PaperCard = ({ paper, isExpanded, onToggle }) => {
    const abstractId = `${paper.id}-abstract`;

    return (
        <article className="rounded-xl border border-sage-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:border-sage-200 hover:shadow-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                    <span className="mb-3 inline-flex rounded-full bg-sage-50 px-3 py-1 font-mono-accent text-xs font-bold text-sage-700">
                        {paper.time}
                    </span>
                    <h3 className="text-xl font-display font-bold leading-snug text-sage-900">
                        {paper.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-sage-600">{paper.authors}</p>
                </div>

                <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-sage-200 bg-sage-50 px-4 py-2 font-display text-sm font-bold text-sage-700 transition-colors hover:border-coral-200 hover:bg-coral-50 hover:text-coral-700 focus-ring"
                    aria-expanded={isExpanded}
                    aria-controls={abstractId}
                    onClick={onToggle}
                >
                    <FileText className="h-4 w-4" />
                    {isExpanded ? 'Hide abstract' : 'Show abstract'}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {isExpanded && (
                <div
                    id={abstractId}
                    className="mt-5 rounded-xl border border-lavender-100 bg-lavender-50/70 p-5"
                >
                    <p className="text-base leading-8 text-sage-800">{paper.abstract}</p>
                </div>
            )}
        </article>
    );
};

const Schedule = () => {
    const [expandedAbstracts, setExpandedAbstracts] = useState({});

    const toggleAbstract = (paperId) => {
        setExpandedAbstracts((current) => ({
            ...current,
            [paperId]: !current[paperId],
        }));
    };

    return (
        <div className="pb-20">
            <PageHeader
                title="Schedule"
                subtitle="Workshop program and timeline."
                icon={CalendarClock}
            />

            <main className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="mb-14">
                    <div className="mb-8 max-w-3xl">
                        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
                            Program at a glance
                        </p>
                        <h1 className="mt-3 text-3xl font-display font-bold text-sage-900 md:text-4xl">
                            BIOMAP Workshop Program
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-sage-600">
                            A compact morning program pairing an invited talk with two oral sessions on bio-inspired methods, optimization, neuroevolution, and visual analysis.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {summaryCards.map((card) => (
                            <SummaryCard key={card.label} {...card} />
                        ))}
                    </div>
                </section>

                <section className="relative">
                    <div className="absolute bottom-0 left-[1.125rem] top-0 hidden w-px bg-gradient-to-b from-sage-200 via-sage-100 to-transparent md:left-[11.4rem] md:block" aria-hidden="true" />
                    <div className="space-y-0">
                        {workshopProgram.map((block) => (
                            <ProgramBlock
                                key={block.id}
                                block={block}
                                expandedAbstracts={expandedAbstracts}
                                onToggleAbstract={toggleAbstract}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Schedule;
