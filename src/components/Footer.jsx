import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-sage-50 border-t border-sage-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">BIOMAP</h3>
            <p className="text-sage-200 text-sm leading-relaxed max-w-xs">
              Bio-Inspired Intelligence for Adaptive Pattern Recognition: From Evolutionary Computing to Self-Organising Vision Systems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sage-300 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-sage-400 mr-2 mt-0.5" />
                <span className="text-sage-300 text-sm">chairs@biomap-workshop.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sage-400 mr-2 mt-0.5" />
                <span className="text-sage-300 text-sm">University of Cassino and Southern Lazio, Italy</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sage-300 uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li><a href="#" className="hover:text-white transition-colors">University of Cassino</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NOVA IMS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CVPL</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sage-800 text-center">
          <p className="text-xs text-sage-400">
            &copy; {new Date().getFullYear()} BIOMAP Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;