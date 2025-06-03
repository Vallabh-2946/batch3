
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, highlight }: FeatureCardProps) => {
  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      highlight ? 'border-2 border-blue-500 bg-blue-50' : 'hover:border-gray-300'
    }`}>
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            NEW
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
          highlight ? 'bg-blue-500' : 'bg-[#001f3f]'
        }`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-[#001f3f] text-xl">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="text-center">
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
