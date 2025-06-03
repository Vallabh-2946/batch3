
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">AI Career Buddy</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students with AI-driven career guidance and college admission predictions. 
              Your journey to the perfect tech career starts here.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Career Quiz</li>
              <li>Learning Roadmaps</li>
              <li>Progress Tracking</li>
              <li>KCET Predictor</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Career Buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
