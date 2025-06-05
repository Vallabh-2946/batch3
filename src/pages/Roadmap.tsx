
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
          description: 'Learn core programming concepts and problem-solving skills',
          resources: [
            { name: 'freeCodeCamp JavaScript', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'free' },
            { name: 'Codecademy Python Course', url: 'https://www.codecademy.com/learn/learn-python-3', type: 'paid' },
            { name: 'CS50 Introduction to Programming', url: 'https://cs50.harvard.edu/x/', type: 'free' },
            { name: 'LeetCode for Practice', url: 'https://leetcode.com/explore/learn/', type: 'free' }
          ]
        },
        {
          id: 'web-basics',
          title: 'Web Development Basics',
          duration: '2-3 months',
          description: 'Master HTML, CSS, and JavaScript fundamentals',
          resources: [
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn', type: 'free' },
            { name: 'The Odin Project', url: 'https://www.theodinproject.com/', type: 'free' },
            { name: 'CSS-Tricks Guide', url: 'https://css-tricks.com/guides/', type: 'free' },
            { name: 'JavaScript30 by Wes Bos', url: 'https://javascript30.com/', type: 'free' },
            { name: 'Frontend Masters CSS Grid', url: 'https://frontendmasters.com/courses/css-grid-flexbox-v2/', type: 'paid' }
          ]
        },
        {
          id: 'frameworks',
          title: 'Frontend Frameworks',
          duration: '2-3 months',
          description: 'Learn modern frameworks like React or Vue.js',
          resources: [
            { name: 'React Official Tutorial', url: 'https://react.dev/learn', type: 'free' },
            { name: 'Udemy React Complete Guide', url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/', type: 'paid' },
            { name: 'Vue.js Official Guide', url: 'https://vuejs.org/guide/', type: 'free' },
            { name: 'Scrimba React Course', url: 'https://scrimba.com/learn/learnreact', type: 'free' },
            { name: 'Next.js Learn', url: 'https://nextjs.org/learn', type: 'free' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend Development',
          duration: '2-3 months',
          description: 'Node.js, databases, APIs, and server management',
          resources: [
            { name: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/guides/', type: 'free' },
            { name: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'free' },
            { name: 'Express.js Guide', url: 'https://expressjs.com/en/starter/installing.html', type: 'free' },
            { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'free' },
            { name: 'Postman API Learning', url: 'https://learning.postman.com/', type: 'free' }
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
          description: 'Master Python for data science and analysis',
          resources: [
            { name: 'Python.org Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'free' },
            { name: 'DataCamp Python Course', url: 'https://www.datacamp.com/courses/intro-to-python-for-data-science', type: 'paid' },
            { name: 'Automate Boring Stuff', url: 'https://automatetheboringstuff.com/', type: 'free' },
            { name: 'Python for Everybody', url: 'https://www.py4e.com/', type: 'free' },
            { name: 'Real Python Tutorials', url: 'https://realpython.com/', type: 'paid' }
          ]
        },
        {
          id: 'statistics',
          title: 'Statistics & Mathematics',
          duration: '2-3 months',
          description: 'Statistics, probability, and linear algebra foundations',
          resources: [
            { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'free' },
            { name: 'Coursera Statistics Course', url: 'https://www.coursera.org/learn/introduction-to-statistics', type: 'paid' },
            { name: 'MIT Linear Algebra', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'free' },
            { name: 'StatQuest YouTube', url: 'https://www.youtube.com/user/joshstarmer', type: 'free' },
            { name: '3Blue1Brown Calculus', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'free' }
          ]
        },
        {
          id: 'data-analysis',
          title: 'Data Analysis & Visualization',
          duration: '2-3 months',
          description: 'Pandas, NumPy, Matplotlib, and data visualization',
          resources: [
            { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/user_guide/index.html', type: 'free' },
            { name: 'Kaggle Learn Data Viz', url: 'https://www.kaggle.com/learn/data-visualization', type: 'free' },
            { name: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'free' },
            { name: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html', type: 'free' },
            { name: 'Seaborn Gallery', url: 'https://seaborn.pydata.org/examples/index.html', type: 'free' },
            { name: 'Plotly Python', url: 'https://plotly.com/python/', type: 'free' }
          ]
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning',
          duration: '3-4 months',
          description: 'ML algorithms, scikit-learn, and deep learning basics',
          resources: [
            { name: 'Scikit-learn Tutorial', url: 'https://scikit-learn.org/stable/tutorial/index.html', type: 'free' },
            { name: 'Andrew Ng ML Course', url: 'https://www.coursera.org/learn/machine-learning', type: 'paid' },
            { name: 'Fast.ai Practical ML', url: 'https://course.fast.ai/', type: 'free' },
            { name: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'free' },
            { name: 'Kaggle Competitions', url: 'https://www.kaggle.com/competitions', type: 'free' }
          ]
        }
      ]
    },
    'ui-ux-designer': {
      title: 'UI/UX Designer',
      duration: '4-8 months',
      steps: [
        {
          id: 'design-fundamentals',
          title: 'Design Fundamentals',
          duration: '1-2 months',
          description: 'Color theory, typography, layout, and visual hierarchy',
          resources: [
            { name: 'Google Design Course', url: 'https://www.coursera.org/professional-certificates/google-ux-design', type: 'paid' },
            { name: 'Adobe Design Principles', url: 'https://www.adobe.com/creativecloud/design/discover/design-principles.html', type: 'free' },
            { name: 'Canva Design School', url: 'https://www.canva.com/designschool/', type: 'free' },
            { name: 'Laws of UX', url: 'https://lawsofux.com/', type: 'free' }
          ]
        },
        {
          id: 'design-tools',
          title: 'Design Tools Mastery',
          duration: '1-2 months',
          description: 'Figma, Adobe XD, Sketch, and prototyping tools',
          resources: [
            { name: 'Figma Academy', url: 'https://www.figma.com/academy/', type: 'free' },
            { name: 'Adobe XD Tutorials', url: 'https://helpx.adobe.com/xd/tutorials.html', type: 'free' },
            { name: 'Sketch App Sources', url: 'https://www.sketchappsources.com/tutorials.html', type: 'free' },
            { name: 'InVision Design Tips', url: 'https://www.invisionapp.com/design-resources', type: 'free' }
          ]
        },
        {
          id: 'user-research',
          title: 'User Research & Testing',
          duration: '1-2 months',
          description: 'User interviews, usability testing, and research methods',
          resources: [
            { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com/articles/', type: 'free' },
            { name: 'User Interview Guide', url: 'https://www.userinterviews.com/ux-research-field-guide', type: 'free' },
            { name: 'Maze Testing Platform', url: 'https://maze.co/guides/', type: 'free' },
            { name: 'Coursera UX Research', url: 'https://www.coursera.org/learn/user-experience-research-design', type: 'paid' }
          ]
        },
        {
          id: 'portfolio',
          title: 'Portfolio Development',
          duration: '1-2 months',
          description: 'Build a compelling design portfolio and case studies',
          resources: [
            { name: 'Dribbble Portfolio Tips', url: 'https://dribbble.com/stories/categories/career', type: 'free' },
            { name: 'Behance Project Ideas', url: 'https://www.behance.net/galleries/ui-ux', type: 'free' },
            { name: 'UXfolio Platform', url: 'https://uxfolio.com/', type: 'free' },
            { name: 'Portfolio Templates', url: 'https://www.figma.com/community/tag/portfolio/files', type: 'free' }
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

  const handleResourceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
                          <button
                            key={idx}
                            onClick={() => handleResourceClick(resource.url)}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all cursor-pointer group"
                          >
                            <div className="text-left">
                              <div className="font-medium group-hover:text-blue-600">{resource.name}</div>
                              <div className={`text-sm ${
                                resource.type === 'free' ? 'text-green-600' : 'text-blue-600'
                              }`}>
                                {resource.type === 'free' ? 'Free' : 'Paid'}
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                          </button>
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
