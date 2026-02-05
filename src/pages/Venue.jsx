import React from 'react';
import PageHeader from '../components/PageHeader';
import { Map, MapPin, Plane, TrainFront, Bus, Globe, Navigation } from 'lucide-react';

const Venue = () => {
    return (
        <div className="pb-20">
            <PageHeader
                title="Venue"
                subtitle="Conference location and travel information."
                icon={Map}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

                {/* Conference Location & Map */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Location Details */}
                    <div className="lg:col-span-1 bg-sage-900 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">ICPR 2026</h2>
                            <p className="text-sage-300 text-lg">28th International Conference on Pattern Recognition</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-sage-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white/90">Venue</h3>
                                    <p className="text-sage-200">International Convention Center</p>
                                    <p className="text-sage-400 text-sm">(Centre de Congrès de Lyon)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Navigation className="w-6 h-6 text-sage-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white/90">Address</h3>
                                    <p className="text-sage-200">50 Quai Charles de Gaulle</p>
                                    <p className="text-sage-200">69006 Lyon, France</p>
                                    <p className="text-sage-400 text-sm mt-1">45.785021, 4.858137</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-md border border-sage-100 relative">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=4.838137%2C45.775021%2C4.878137%2C45.795021&amp;layer=mapnik&amp;marker=45.785021%2C4.858137"
                            title="Venue Map"
                            className="w-full h-full"
                        ></iframe>
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs text-slate-600 shadow-sm">
                            © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors
                        </div>
                    </div>
                </div>

                {/* Transportation Grid */}
                <div>
                    <h2 className="text-2xl font-display font-bold text-sage-900 mb-8 flex items-center gap-3">
                        <Plane className="w-8 h-8 text-sage-600" />
                        Accessibility & Transportation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* By Plane */}
                        <div className="bg-white p-8 rounded-xl border border-sage-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Plane className="w-5 h-5 text-coral-500" />
                                By Plane
                            </h3>
                            <p className="font-semibold text-gray-900 mb-2">Lyon Saint-Exupéry Airport (LYS)</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2"></span>
                                    <span>The Heart of Europe: Connected to 99 international destinations and 59 European cities.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2"></span>
                                    <span>Served by 49 airline companies.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2"></span>
                                    <span>Over 130 non-stop flight routes.</span>
                                </li>
                            </ul>
                        </div>

                        {/* By Train */}
                        <div className="bg-white p-8 rounded-xl border border-sage-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <TrainFront className="w-5 h-5 text-coral-500" />
                                By Train
                            </h3>
                            <p className="font-semibold text-gray-900 mb-2">3 High-Speed Train Stations</p>
                            <ul className="space-y-4 text-gray-600">
                                <li>
                                    <strong className="block text-gray-800">Saint-Exupéry Station (Airport)</strong>
                                    <span className="text-sm">Directly connected to the airport terminals.</span>
                                </li>
                                <li>
                                    <strong className="block text-gray-800">Perrache Station (City Center)</strong>
                                    <span className="text-sm">Serves mostly trains on the Paris-Marseille route.</span>
                                </li>
                                <li>
                                    <strong className="block text-gray-800">Part-Dieu Station (City Center)</strong>
                                    <span className="text-sm">Main hub for national and international connections.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Local Transport & Visa */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* In The City */}
                    <div className="md:col-span-2 bg-sage-50 p-8 rounded-xl border border-sage-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Bus className="w-5 h-5 text-sage-600" />
                            In the City (TCL Network)
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="text-gray-700 space-y-2">
                                <p>High-performance public transport system (2nd largest in France):</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li><strong>4 Metro Lines:</strong> A, B, C, D</li>
                                    <li><strong>7 Tramway Lines:</strong> T1 to T7</li>
                                    <li><strong>2 Funicular Lines</strong></li>
                                    <li><strong>140 Bus Lines</strong> (including electric trolleybuses)</li>
                                </ul>
                            </div>
                            <div className="text-gray-700 bg-white/50 p-4 rounded-lg">
                                <p className="text-sm font-medium mb-2">Coverage</p>
                                <p className="text-sm text-gray-600">Spreads over 606 km² covering 62 communes. Extensive network ensuring easy access to the venue and city attractions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visa Info */}
                    <div className="md:col-span-1 bg-white p-8 rounded-xl border border-sage-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-coral-500" />
                            Visa Information
                        </h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div>
                                <strong className="block text-gray-900 mb-1">European / Schengen Citizens</strong>
                                <p>Valid identity card or passport required.</p>
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <strong className="block text-gray-900 mb-1">Outside Schengen Area</strong>
                                <p className="mb-2">Passport mandatory. Visa may be required.</p>
                                <div className="bg-amber-50 text-amber-800 p-2 rounded">
                                    <p className="font-semibold">Visa C (Short-stay)</p>
                                    <p>Duration: &lt; 90 days</p>
                                    <p>Application Fee: ~80 €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Venue;
