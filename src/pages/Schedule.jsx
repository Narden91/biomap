import React from 'react';
import PageHeader from '../components/PageHeader';
import { CalendarClock } from 'lucide-react';

const Schedule = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Schedule"
                subtitle="Workshop program and timeline."
                icon={CalendarClock}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                <div className="bg-white rounded-xl p-12 border border-sage-100 border-dashed">
                    <p className="text-sage-500 text-lg">The detailed workshop schedule will be available after the notification of acceptance.</p>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
