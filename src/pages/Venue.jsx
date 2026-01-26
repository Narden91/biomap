import React from 'react';
import PageHeader from '../components/PageHeader';
import { Map } from 'lucide-react';

const Venue = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Venue"
                subtitle="Conference location and travel information."
                icon={Map}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                <div className="bg-white rounded-xl p-12 border border-sage-100 border-dashed">
                    <p className="text-sage-500 text-lg">Venue details will be updated shortly.</p>
                </div>
            </div>
        </div>
    );
};

export default Venue;
