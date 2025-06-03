
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CareerQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "What type of problems do you enjoy solving?",
      options: [
        { value: "logical", text: "Logical puzzles and algorithms" },
        { value: "creative", text: "Design and user experience challenges" },
        { value: "analytical", text: "Data analysis and patterns" },
        { value: "systems", text: "Building and optimizing systems" }
      ]
    },
    {
      id: 1,
      question: "Which work environment appeals to you most?",
      options: [
        { value: "team", text: "Collaborative team environment" },
        { value: "independent", text: "Independent research and development" },
        { value: "client", text: "Client-facing and consulting" },
        { value: "startup", text: "Fast-paced startup atmosphere" }
      ]
    },
    {
      id: 2,
      question: "What motivates you the most?",
      options: [
        { value: "innovation", text: "Creating innovative solutions" },
        { value: "impact", text: "Making a positive impact on users" },
        { value: "growth", text: "Continuous learning and growth" },
        { value: "leadership", text: "Leading teams and projects" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getCareerRecommendation = () => {
    const answerValues = Object.values(answers);
    if (answerValues.includes("logical") && answerValues.includes("systems")) {
      return {
        career: "Software Engineer",
        description: "Build applications and systems using various programming languages",
        skills: ["JavaScript", "Python", "React", "Node.js"],
        salary: "₹6-15 LPA"
      };
    } else if (answerValues.includes("creative") && answerValues.includes("impact")) {
      return {
        career: "UI/UX Designer",
        description: "Design user interfaces and experiences for digital products",
        skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
        salary: "₹4-12 LPA"
      };
    } else if (answerValues.includes("analytical")) {
      return {
        career: "Data Scientist",
        description: "Analyze data to extract insights and build predictive models",
        skills: ["Python", "SQL", "Machine Learning", "Statistics"],
        salary: "₹7-18 LPA"
      };
    } else {
      return {
        career: "Product Manager",
        description: "Lead product development and strategy",
        skills: ["Product Strategy", "Analytics", "Communication", "Leadership"],
        salary: "₹8-20 LPA"
      };
    }
  };

  if (showResults) {
    const recommendation = getCareerRecommendation();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-[#001f3f]">Your Career Match!</CardTitle>
              <CardDescription>Based on your quiz responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">{recommendation.career}</h2>
                <p className="text-gray-700 mb-6">{recommendation.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#001f3f] mb-3">Key Skills to Learn</h3>
                  <ul className="space-y-2">
                    {recommendation.skills.map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#001f3f] mb-3">Expected Salary</h3>
                  <p className="text-2xl font-bold text-green-600">{recommendation.salary}</p>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center pt-6">
                <Button 
                  onClick={() => navigate('/roadmap')}
                  className="bg-[#001f3f] hover:bg-[#002a5c]"
                >
                  Get Learning Roadmap
                </Button>
                <Button 
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setShowResults(false);
                  }}
                  variant="outline"
                >
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#001f3f]">
              AI Career Quiz - Question {currentQuestion + 1} of {questions.length}
            </CardTitle>
            <CardDescription>
              Answer honestly to get the best career recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      answers[currentQuestion] === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                onClick={prevQuestion}
                variant="outline"
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button 
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className="bg-[#001f3f] hover:bg-[#002a5c]"
              >
                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerQuiz;
