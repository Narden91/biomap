import React, { memo } from 'react';
import PageHeader from '../components/PageHeader';
import { CalendarDays, Calendar, Bell, FileCheck, CalendarCheck } from 'lucide-react';

// Memoized date item component with enhanced visual design
const DateItem = memo(({ label, date, icon: Icon }) => (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-8 border-2 border-sage-200 hover:border-coral-400 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
        {/* Icon background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="w-full h-full" strokeWidth={1} />
        </div>

        <div className="relative flex items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <Icon className="h-8 w-8 text-white" strokeWidth={2} />
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{label}</h3>
                <p className="text-2xl font-bold text-coral-600">{date}</p>
            </div>
        </div>
    </div>
));

DateItem.displayName = 'DateItem';

// Static data outside component
const dates = [
    { label: "Paper Submission Deadline", date: "May 1, 2026", icon: FileCheck },
    { label: "Notification of Acceptance", date: "June 10, 2026", icon: Bell },
    { label: "Camera-Ready Submission", date: "June 18, 2026 (strict deadline)", icon: CalendarCheck },
    { label: "Workshop Date", date: "August 22, 2026", icon: Calendar }
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
