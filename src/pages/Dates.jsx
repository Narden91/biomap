import React from 'react';
import PageHeader from '../components/PageHeader';
import { CalendarDays } from 'lucide-react';

const DateItem = ({ label, date, status }) => (
    <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-sage-100 hover:border-sage-200 transition-colors">
        <div>
            <h3 className="text-lg font-bold text-gray-900">{label}</h3>
            <p className="text-sage-500 font-medium mt-1">{date}</p>
        </div>
        {status && (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === 'Upcoming' ? 'bg-coral-50 text-coral-600' : 'bg-gray-100 text-gray-500'
                }`}>
                {status}
            </span>
        )}
    </div>
);

const Dates = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Important Dates"
                subtitle="Key deadlines for submissions and registration."
                icon={CalendarDays}
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-4">
                <DateItem label="Paper Submission Deadline" date="To be announced" status="Upcoming" />
                <DateItem label="Notification of Acceptance" date="To be announced" status="Upcoming" />
                <DateItem label="Camera-Ready Submission" date="To be announced" status="Upcoming" />
                <DateItem label="Workshop Date" date="2026" status="Upcoming" />
            </div>
        </div>
    );
};

export default Dates;
