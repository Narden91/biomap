import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText } from 'lucide-react';

const Submission = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Submission"
                subtitle="Guidelines and portal for paper submission."
                icon={FileText}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-white p-8 rounded-xl border border-sage-100">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Instructions for Authors</h2>
                <div className="prose prose-sage text-gray-600">
                    <p>
                        Authors are invited to submit original papers that have not been published or submitted for publication elsewhere.
                        Papers must be written in English and formatted according to the conference templates.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Full papers should be between 10-14 pages.</li>
                        <li>Short papers should be between 6-8 pages.</li>
                        <li>All submissions will undergo a double-blind review process.</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage-600 hover:bg-sage-700 md:py-4 md:text-lg md:px-10 transition-colors">
                        Submit via CMT/EasyChair
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Submission;
