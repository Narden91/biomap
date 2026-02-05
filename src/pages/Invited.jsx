import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mic } from 'lucide-react';

const Invited = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Invited Speakers"
                subtitle="Keynote speakers and invited talks."
                icon={Mic}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                <div className="bg-white rounded-xl p-12 border border-sage-100 border-dashed">
                    <p className="text-sage-500 text-lg mb-8">Detailed information about invited speakers will be announced soon.</p>


                </div>
            </div>
        </div>
    );
};

export default Invited;
