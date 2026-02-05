import React from 'react';
import PageHeader from '../components/PageHeader';
import { CalendarClock, MapPin, Calendar, Clock } from 'lucide-react';

const Schedule = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Schedule"
                subtitle="Workshop program and timeline."
                icon={CalendarClock}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-sage-100 shadow-xl">
                    {/* Key Schedule Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-sage-900 mb-10">Key Schedule</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

                            {/* Workshop Date Card */}
                            <div className="relative group overflow-hidden bg-white rounded-2xl p-8 border border-sage-100 shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Clock className="w-24 h-24 text-sage-500" />
                                </div>
                                <div className="relative z-10 text-left">
                                    <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mb-6 text-sage-600 group-hover:scale-110 transition-transform duration-300">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-sage-900 mb-2">Workshop Date</h3>
                                    <p className="text-2xl font-bold text-coral-600 mb-2">August 22, 2026</p>
                                    <p className="text-sage-500 font-medium">Saturday, 08:00 – 14:00</p>
                                </div>
                            </div>

                            {/* Conference Context Card */}
                            <div className="relative group overflow-hidden bg-sage-900 text-white rounded-2xl p-8 border border-sage-800 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MapPin className="w-32 h-32 text-white" />
                                </div>
                                <div className="relative z-10 text-left">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-sage-300 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">Conference Context</h3>
                                    <div className="space-y-2">
                                        <p className="text-lg text-sage-100">
                                            Held in conjunction with <strong className="text-white">ICPR 2026</strong>
                                        </p>
                                        <p className="text-sage-300">
                                            28th International Conference on Pattern Recognition
                                        </p>
                                        <div className="pt-4 flex flex-col sm:flex-row gap-6 mt-4 border-t border-sage-800/50">
                                            <div>
                                                <span className="block text-xs uppercase tracking-wider text-sage-400 mb-1">City</span>
                                                <span className="text-lg font-semibold">Lyon, France</span>
                                            </div>
                                            <div>
                                                <span className="block text-xs uppercase tracking-wider text-sage-400 mb-1">Venue</span>
                                                <span className="text-lg font-semibold">International Convention Center</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sage-50 border border-sage-100 rounded-xl p-6 inline-flex items-center gap-3 text-sage-600">
                        <info className="w-5 h-5" />
                        <span className="font-medium">The detailed workshop schedule will be available after the notification of acceptance.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
