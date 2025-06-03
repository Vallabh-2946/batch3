
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#001f3f] mb-6 leading-tight">
            Your Personal AI Career &<br />
            <span className="text-blue-600">Admission Coach</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get AI-powered career guidance, personalized learning roadmaps, and predict your 
            KCET rank & college admissions - all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#001f3f] hover:bg-[#002a5c] text-white px-8 py-6 text-lg"
            >
              Start Career Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white px-8 py-6 text-lg"
            >
              Try KCET Predictor
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>10,000+ Students Guided</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>50+ Career Paths</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
