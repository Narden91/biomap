import React, { memo } from 'react';
import PageHeader from '../components/PageHeader';
import Countdown3D from '../components/Countdown3D';
import { CalendarDays, Calendar, Bell, FileCheck, CalendarCheck, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Memoized date item component - Simplified for the list below
const DateItem = memo(({ label, date, icon: Icon, ispassed }) => (
    <div className={`group relative overflow-hidden bg-white/80 rounded-xl p-6 border border-sage-100 hover:border-sage-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-4 ${ispassed ? 'opacity-60 grayscale' : ''}`}>
        <div className="flex-shrink-0 p-3 bg-sage-50 text-sage-600 rounded-lg group-hover:bg-coral-50 group-hover:text-coral-600 transition-colors">
            <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{label}</h3>
            <p className="text-sage-600 font-medium">{date}</p>
        </div>
    </div>
));

DateItem.displayName = 'DateItem';

const Dates = () => {
    const submissionDate = "2026-05-01T23:59:59";

    const otherDates = [
        { label: "Notification of Acceptance", date: "June 10, 2026", icon: Bell },
        { label: "Camera-Ready Submission", date: "June 18, 2026 (strict)", icon: CalendarCheck },
        { label: "Workshop Date", date: "August 22, 2026", icon: Calendar }
    ];

    return (
        <div className="pb-20">
            <PageHeader
                title="Important Dates"
                subtitle="Mark your calendar for these key biology-inspired pattern recognition deadlines."
                icon={CalendarDays}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Hero Countdown Section */}
                <div className="relative mb-16">
                    {/* Decorative blurred background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-coral-200/20 to-sage-200/20 blur-3xl rounded-full transform -translate-y-1/2 pointer-events-none" />

                    <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl overflow-hidden text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-50 text-coral-600 text-sm font-bold uppercase tracking-wider mb-6 border border-coral-100">
                            <Clock className="w-4 h-4 animate-pulse" />
                            Upcoming Deadline
                        </div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-2">
                            Paper Submission
                        </h2>
                        <p className="text-xl text-sage-600 font-medium mb-8">May 1, 2026</p>

                        <div className="mb-10">
                            <Countdown3D targetDate={submissionDate} />
                        </div>

                        <div className="flex justify-center">
                            <Link
                                to="/submission"
                                className="group inline-flex items-center gap-2 px-8 py-3 bg-coral-500 text-white rounded-xl font-display font-semibold hover:bg-coral-600 transition-all duration-300 shadow-lg hover:shadow-coral-500/30 hover:-translate-y-0.5"
                            >
                                Submit Your Paper
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Timeline Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {otherDates.map((item) => (
                        <DateItem key={item.label} {...item} />
                    ))}
                </div>

                <div className="mt-12 p-6 bg-sage-50 rounded-2xl border border-sage-100 text-center">
                    <p className="text-sage-700">
                        <span className="font-semibold">Note:</span> All deadlines are at 23:59 AoE (Anywhere on Earth).
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Dates;
