import React from 'react';
import PageHeader from '../components/PageHeader';
import { BookOpenText, Mic, UserRound } from 'lucide-react';

const invitedTalks = [
    {
        speaker: "Prof. Bing Xue",
        role: "Invited Speaker",
        title: "Genetic Programming for Image Analysis and Real-world Applications",
        abstract: "Image analysis stands as a foundational pillar of modern computer vision, powering diverse real-world applications. While deep learning, particularly deep neural networks (DNNs), have driven remarkable progress, designing optimal DNN architectures remains a significant challenge, demanding substantial domain expertise and computational resources. Evolutionary computation, particularly Genetic Programming offers a promising approach by automatically learning flexible program structures and incorporating various domain specific operators. This talk will present an expanded perspective on deep learning and survey the cutting-edge work in Genetic Programming for image analysis. We will also explore recent advancements to automatically evolve deep structures and perform feature learning for image analysis, especially regarding interpretability and visualisation. The talk will also discuss practical applications of these techniques in solving various real-world problems."
    }
];

const Invited = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Invited Speakers"
                subtitle="Keynote speakers and invited talks."
                icon={Mic}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="space-y-8">
                    {invitedTalks.map((talk) => (
                        <article
                            key={talk.title}
                            className="overflow-hidden rounded-2xl border border-sage-100 bg-white shadow-sm"
                        >
                            <div className="border-b border-sage-100 bg-sage-50/70 p-6 md:p-8">
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <span className="inline-flex items-center gap-2 rounded-full bg-coral-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-coral-700">
                                            <Mic className="h-3.5 w-3.5" />
                                            {talk.role}
                                        </span>
                                        <h2 className="mt-4 text-3xl font-display font-bold text-sage-900">
                                            {talk.speaker}
                                        </h2>
                                    </div>
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-sage-100 bg-white text-sage-600 shadow-sm">
                                        <UserRound className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="mb-6 flex items-start gap-3">
                                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-600">
                                        <BookOpenText className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wide text-sage-500">Title</p>
                                        <h3 className="mt-1 text-2xl font-display font-bold text-gray-900">
                                            {talk.title}
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-500">Abstract</p>
                                    <p className="text-base leading-8 text-gray-700 text-justify">
                                        {talk.abstract}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Invited;
