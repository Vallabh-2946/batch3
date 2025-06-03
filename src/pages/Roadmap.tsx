
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Circle, Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState('software-engineer');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const careers = {
    'software-engineer': {
      title: 'Software Engineer',
      duration: '6-12 months',
      steps: [
        {
          id: 'fundamentals',
          title: 'Programming Fundamentals',
          duration: '2-3 months',
          description: 'Learn core programming concepts',
          resources: [
            { name: 'freeCodeCamp JavaScript', url: '#', type: 'free' },
            { name: 'Codecademy Python Course', url: '#', type: 'paid' }
          ]
        },
        {
          id: 'web-basics',
          title: 'Web Development Basics',
          duration: '2-3 months',
          description: 'HTML, CSS, and JavaScript essentials',
          resources: [
            { name: 'MDN Web Docs', url: '#', type: 'free' },
            { name: 'The Odin Project', url: '#', type: 'free' }
          ]
        },
        {
          id: 'frameworks',
          title: 'Frontend Frameworks',
          duration: '2-3 months',
          description: 'Learn React or Vue.js',
          resources: [
            { name: 'React Official Tutorial', url: '#', type: 'free' },
            { name: 'Udemy React Course', url: '#', type: 'paid' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend Development',
          duration: '2-3 months',
          description: 'Node.js, databases, and APIs',
          resources: [
            { name: 'Node.js Documentation', url: '#', type: 'free' },
            { name: 'MongoDB University', url: '#', type: 'free' }
          ]
        }
      ]
    },
    'data-scientist': {
      title: 'Data Scientist',
      duration: '8-12 months',
      steps: [
        {
          id: 'python-basics',
          title: 'Python Programming',
          duration: '2 months',
          description: 'Learn Python for data science',
          resources: [
            { name: 'Python.org Tutorial', url: '#', type: 'free' },
            { name: 'DataCamp Python Course', url: '#', type: 'paid' }
          ]
        },
        {
          id: 'statistics',
          title: 'Statistics & Math',
          duration: '2-3 months',
          description: 'Statistics, probability, and linear algebra',
          resources: [
            { name: 'Khan Academy Statistics', url: '#', type: 'free' },
            { name: 'Coursera Statistics Course', url: '#', type: 'paid' }
          ]
        },
        {
          id: 'data-analysis',
          title: 'Data Analysis',
          duration: '2-3 months',
          description: 'Pandas, NumPy, and data visualization',
          resources: [
            { name: 'Pandas Documentation', url: '#', type: 'free' },
            { name: 'Kaggle Learn', url: '#', type: 'free' }
          ]
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning',
          duration: '3-4 months',
          description: 'ML algorithms and frameworks',
          resources: [
            { name: 'Scikit-learn Tutorial', url: '#', type: 'free' },
            { name: 'Andrew Ng ML Course', url: '#', type: 'paid' }
          ]
        }
      ]
    }
  };

  const toggleStepCompletion = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const currentCareer = careers[selectedCareer as keyof typeof careers];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Career Selection Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#001f3f]">Choose Career Path</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(careers).map(([key, career]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCareer(key)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedCareer === key
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {career.title}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Roadmap Content */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-[#001f3f]">{currentCareer.title} Roadmap</CardTitle>
                <CardDescription className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Estimated Duration: {currentCareer.duration}
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              {currentCareer.steps.map((step, index) => (
                <Card key={step.id} className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleStepCompletion(step.id)}
                          className="text-2xl"
                        >
                          {completedSteps.has(step.id) ? (
                            <CheckCircle className="text-green-500" />
                          ) : (
                            <Circle className="text-gray-400" />
                          )}
                        </button>
                        <div>
                          <CardTitle className="text-[#001f3f]">
                            Step {index + 1}: {step.title}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Clock className="mr-1 h-3 w-3" />
                            {step.duration}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-[#001f3f] mb-3">Learning Resources</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.resources.map((resource, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                          >
                            <div>
                              <div className="font-medium">{resource.name}</div>
                              <div className={`text-sm ${
                                resource.type === 'free' ? 'text-green-600' : 'text-blue-600'
                              }`}>
                                {resource.type === 'free' ? 'Free' : 'Paid'}
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-semibold text-[#001f3f] mb-2">Track Your Progress</h3>
                  <p className="text-gray-600 mb-4">
                    {completedSteps.size} of {currentCareer.steps.length} steps completed
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(completedSteps.size / currentCareer.steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
