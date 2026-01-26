import React from 'react';
import PageHeader from '../components/PageHeader';
import { Sparkles } from 'lucide-react';

const SpecialSession = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Special Session"
                subtitle="Featured sessions and spotlight topics."
                icon={Sparkles}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                <div className="bg-white rounded-xl p-12 border border-sage-100 border-dashed">
                    <p className="text-sage-500 text-lg">Information regarding the Special Session will be posted here.</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialSession;
