import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText, FileCode, Download } from 'lucide-react';

const Submission = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Submission"
                subtitle="Guidelines and portal for paper submission."
                icon={FileText}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
                {/* Instructions & Proceedings */}
                <div className="bg-white p-8 rounded-xl border border-sage-100 shadow-sm">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Instructions for Authors</h2>
                    <div className="prose prose-sage text-gray-600">
                        <p>
                            Authors are invited to submit original papers that have not been published or submitted for publication elsewhere.
                            Papers must be written in English and formatted according to the conference templates.
                        </p>
                        <p>
                            All submissions will undergo a <strong>double-blind review process</strong>.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Proceedings & Publication (LNCS)</h3>
                        <p>
                            Workshop proceedings will be published in the <strong>Lecture Notes in Computer Science (LNCS)</strong> series.
                            Authors must use the <a href="https://www.icpr2026.org" target="_blank" rel="noopener noreferrer" className="text-coral-600 hover:text-coral-700 font-medium">LNCS paper format</a> available on the ICPR 2026 website.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4 mb-8">
                            <a
                                href="https://icpr2026.org/files/ICPR_2026_DOC_Templates.zip"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 text-sage-700 rounded-lg border border-sage-200 hover:bg-sage-100 hover:border-sage-300 transition-colors text-sm font-medium"
                            >
                                <FileText className="w-4 h-4" />
                                Download .docx Template
                            </a>
                            <a
                                href="https://icpr2026.org/files/ICPR_2026_LaTeX_Templates.zip"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 text-sage-700 rounded-lg border border-sage-200 hover:bg-sage-100 hover:border-sage-300 transition-colors text-sm font-medium"
                            >
                                <FileCode className="w-4 h-4" />
                                Download LaTeX Template
                            </a>
                        </div>

                        <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">Page Limits</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Maximum length:</strong> 15 pages (including references).</li>
                            <li><strong>Additional pages:</strong> €150 per extra page beyond 15.</li>
                        </ul>

                        <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">Eligibility for Publication</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Only <strong>full papers</strong> (more than 6 pages) will be published.</li>
                            <li>Workshops accepting short papers (≤ 6 pages) will not be published in the proceedings.</li>
                        </ul>
                    </div>

                    <div className="mt-8 pt-8 border-t border-sage-100">
                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage-600 hover:bg-sage-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                            Submit via CMT
                        </a>

                        {/* CMT Acknowledgement */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-600 leading-relaxed">
                                <strong>Acknowledgement:</strong> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Registration Requirement */}
                {/* Registration Requirement */}
                <div className="bg-sage-50 p-8 rounded-xl border border-sage-200">
                    <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Registration Requirement</h2>
                    <div className="text-gray-700">
                        <p>
                            Each accepted paper must have a <strong>presenting author registered</strong>.
                            Registration details will be available via the ICPR 2026 registration link (when released).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submission;
