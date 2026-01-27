import React, { memo } from 'react';
import PageHeader from '../components/PageHeader';
import { CalendarDays } from 'lucide-react';

// Memoized date item component
const DateItem = memo(({ label, date, status }) => (
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
));

DateItem.displayName = 'DateItem';

// Static data outside component
const dates = [
    { label: "Paper Submission Deadline", date: "To be announced", status: "Upcoming" },
    { label: "Notification of Acceptance", date: "To be announced", status: "Upcoming" },
    { label: "Camera-Ready Submission", date: "To be announced", status: "Upcoming" },
    { label: "Workshop Date", date: "2026", status: "Upcoming" }
];

const Dates = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Important Dates"
                subtitle="Key deadlines for submissions and registration."
                icon={CalendarDays}
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-4">
                {dates.map((item) => (
                    <DateItem key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Dates;
