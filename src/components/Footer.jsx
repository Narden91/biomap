import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-sage-50 border-t border-sage-800 relative noise-overlay">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">BIOMAP</h3>
            <p className="text-sage-200 text-sm leading-relaxed max-w-xs">
              Bio-Inspired Intelligence for Adaptive Pattern Recognition: From Evolutionary Computing to Self-Organising Vision Systems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sage-300 uppercase tracking-wider mb-4">Organizers</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sage-400 mr-2 mt-0.5" />
                <span className="text-sage-300 text-sm">University of Cassino and Southern Lazio, Italy</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sage-400 mr-2 mt-0.5" />
                <span className="text-sage-300 text-sm">NOVA IMS Information Management School, Portugal</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sage-300 uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="https://www.unicas.it/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">University of Cassino</a></li>
              <li><a href="https://www.novaims.unl.pt/en/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NOVA IMS</a></li>
              <li><a href="https://www.cvpl.it/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CVPL</a></li>
            </ul>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-8 pt-6 border-t border-sage-800">
          <h4 className="text-sm font-semibold text-sage-300 uppercase tracking-wider mb-4 text-center">
            In Collaboration With
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* UNICAS Logo */}
            <div className="group flex items-center justify-center">
              <div className="glass-sage rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sage-500/20">
                <img
                  src="/biomap/unicas_emblem.svg"
                  alt="University of Cassino and Southern Lazio"
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* IAPR Logo */}
            <div className="group flex items-center justify-center">
              <div className="glass-sage rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sage-500/20">
                <img
                  src="/biomap/IAPR_logo.bmp"
                  alt="International Association for Pattern Recognition"
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* IAPR 50th Logo */}
            <div className="group flex items-center justify-center">
              <div className="glass-sage rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sage-500/20">
                <img
                  src="/biomap/IAPR_50th_Logo.png"
                  alt="IAPR 50th Anniversary"
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* NOVA IMS Logo */}
            <div className="group flex items-center justify-center">
              <div className="glass-sage rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sage-500/20">
                <img
                  src="/biomap/nova_ims.png"
                  alt="NOVA Information Management School"
                  className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-sage-800 text-center">
          <p className="text-xs text-sage-400">
            &copy; {new Date().getFullYear()} BIOMAP Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;