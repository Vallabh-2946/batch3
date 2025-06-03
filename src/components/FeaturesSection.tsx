
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, ClipBoard, ChartBar, Award, School, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "AI Career Quiz",
      description: "Take our intelligent quiz to discover your perfect tech career match based on your interests, skills, and goals."
    },
    {
      icon: BookOpen,
      title: "Learning Roadmaps",
      description: "Get personalized step-by-step learning paths with free and paid resources tailored to your chosen career."
    },
    {
      icon: ChartBar,
      title: "Skill Progress Tracker",
      description: "Monitor your learning progress with detailed analytics and milestone tracking to stay motivated."
    },
    {
      icon: ClipBoard,
      title: "Weekly Goal Setter",
      description: "Set achievable weekly goals and get AI-powered recommendations to accelerate your learning journey."
    },
    {
      icon: School,
      title: "KCET Rank Predictor",
      description: "Predict your KCET rank and eligible colleges based on your PUC marks and KCET score with high accuracy.",
      highlight: true
    },
    {
      icon: Award,
      title: "College Admission Guide",
      description: "Get insights on cut-off trends, branch availability, and strategic college selection for better admission chances."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From career discovery to college admissions, we've got you covered with AI-powered tools and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
