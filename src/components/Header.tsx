
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#001f3f]" />
            <span className="text-xl font-bold text-[#001f3f]">AI Career Buddy</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#001f3f] transition-colors">Features</a>
            <a href="#kcet-predictor" className="text-gray-700 hover:text-[#001f3f] transition-colors">KCET Predictor</a>
            <Link to="/roadmap" className="text-gray-700 hover:text-[#001f3f] transition-colors">Roadmap</Link>
            <Link to="/progress" className="text-gray-700 hover:text-[#001f3f] transition-colors">Progress</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Link to="/career-quiz">
              <Button className="bg-[#001f3f] hover:bg-[#002a5c] text-white">
                Get Started
              </Button>
            </Link>
            <Menu className="h-6 w-6 md:hidden text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
