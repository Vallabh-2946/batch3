
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Briefcase, DollarSign, TrendingUp } from 'lucide-react';
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
        { value: "logical", text: "Logical puzzles, algorithms, and mathematical problems" },
        { value: "creative", text: "Design challenges and user experience problems" },
        { value: "analytical", text: "Data analysis, patterns, and statistical insights" },
        { value: "systems", text: "Building and optimizing complex systems" }
      ]
    },
    {
      id: 1,
      question: "Which work environment appeals to you most?",
      options: [
        { value: "team", text: "Collaborative team environment with regular meetings" },
        { value: "independent", text: "Independent research and development work" },
        { value: "client", text: "Client-facing roles with presentations and consulting" },
        { value: "startup", text: "Fast-paced startup atmosphere with multiple responsibilities" }
      ]
    },
    {
      id: 2,
      question: "What motivates you the most in your career?",
      options: [
        { value: "innovation", text: "Creating innovative solutions and breakthrough technologies" },
        { value: "impact", text: "Making a positive impact on users and society" },
        { value: "growth", text: "Continuous learning and professional development" },
        { value: "leadership", text: "Leading teams and managing complex projects" }
      ]
    },
    {
      id: 3,
      question: "Which technical area interests you most?",
      options: [
        { value: "programming", text: "Writing code and developing applications" },
        { value: "design", text: "Visual design and user interface creation" },
        { value: "data", text: "Working with large datasets and machine learning" },
        { value: "infrastructure", text: "Cloud computing and system architecture" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to learn new skills?",
      options: [
        { value: "hands-on", text: "Hands-on projects and practical experience" },
        { value: "structured", text: "Structured courses and formal education" },
        { value: "mentorship", text: "Learning from mentors and senior professionals" },
        { value: "self-directed", text: "Self-directed research and experimentation" }
      ]
    },
    {
      id: 5,
      question: "What size company would you prefer to work for?",
      options: [
        { value: "large", text: "Large corporations with established processes" },
        { value: "medium", text: "Medium-sized companies with growth opportunities" },
        { value: "startup", text: "Early-stage startups with high impact potential" },
        { value: "freelance", text: "Freelancing or consulting independently" }
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
    
    // Enhanced matching logic
    if (answerValues.includes("programming") && answerValues.includes("logical")) {
      return {
        career: "Software Engineer",
        description: "Design and develop software applications, websites, and systems using various programming languages and frameworks.",
        skills: ["JavaScript", "Python", "React", "Node.js", "Git", "Databases"],
        salary: "₹6-15 LPA",
        jobs: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "Mobile App Developer",
          "DevOps Engineer"
        ],
        companies: ["TCS", "Infosys", "Microsoft", "Google", "Amazon"]
      };
    } else if (answerValues.includes("design") && answerValues.includes("creative")) {
      return {
        career: "UI/UX Designer",
        description: "Create intuitive and visually appealing user interfaces and experiences for digital products and applications.",
        skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Design Systems"],
        salary: "₹4-12 LPA",
        jobs: [
          "UI Designer",
          "UX Designer",
          "Product Designer",
          "Visual Designer",
          "Interaction Designer"
        ],
        companies: ["Zomato", "Swiggy", "Flipkart", "Adobe", "Uber"]
      };
    } else if (answerValues.includes("data") && answerValues.includes("analytical")) {
      return {
        career: "Data Scientist",
        description: "Analyze complex data sets to extract insights, build predictive models, and drive data-driven decision making.",
        skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Tableau"],
        salary: "₹7-18 LPA",
        jobs: [
          "Data Analyst",
          "Machine Learning Engineer",
          "Business Intelligence Analyst",
          "Research Scientist",
          "AI Engineer"
        ],
        companies: ["Netflix", "Spotify", "LinkedIn", "Facebook", "IBM"]
      };
    } else if (answerValues.includes("leadership") && answerValues.includes("client")) {
      return {
        career: "Product Manager",
        description: "Lead product development strategy, coordinate cross-functional teams, and ensure successful product launches.",
        skills: ["Product Strategy", "Analytics", "Communication", "Leadership", "Agile", "Market Research"],
        salary: "₹8-20 LPA",
        jobs: [
          "Associate Product Manager",
          "Senior Product Manager",
          "Product Owner",
          "Growth Product Manager",
          "Technical Product Manager"
        ],
        companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Paytm"]
      };
    } else if (answerValues.includes("infrastructure") && answerValues.includes("systems")) {
      return {
        career: "Cloud Engineer",
        description: "Design, implement, and manage cloud infrastructure and services to support scalable applications.",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Linux"],
        salary: "₹8-16 LPA",
        jobs: [
          "Cloud Solutions Architect",
          "Site Reliability Engineer",
          "Platform Engineer",
          "Infrastructure Engineer",
          "Cloud Security Engineer"
        ],
        companies: ["Amazon", "Microsoft", "Google Cloud", "Oracle", "Salesforce"]
      };
    } else {
      return {
        career: "Full Stack Developer",
        description: "Work on both frontend and backend technologies to build complete web applications.",
        skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Python", "MongoDB"],
        salary: "₹5-14 LPA",
        jobs: [
          "Junior Full Stack Developer",
          "MEAN Stack Developer",
          "MERN Stack Developer",
          "Python Full Stack Developer",
          "Java Full Stack Developer"
        ],
        companies: ["Wipro", "Cognizant", "Accenture", "HCL", "Tech Mahindra"]
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
                  <h3 className="font-semibold text-[#001f3f] mb-3 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Key Skills to Learn
                  </h3>
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
                  <h3 className="font-semibold text-[#001f3f] mb-3 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Expected Salary Range
                  </h3>
                  <p className="text-2xl font-bold text-green-600">{recommendation.salary}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#001f3f] mb-3 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Related Job Roles
                  </h3>
                  <ul className="space-y-2">
                    {recommendation.jobs.map((job, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#001f3f] mb-3">Top Hiring Companies</h3>
                  <ul className="space-y-2">
                    {recommendation.companies.map((company, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center pt-6">
                <Button 
                  onClick={() => navigate('/roadmap', { state: { career: recommendation.career } })}
                  className="bg-[#001f3f] hover:bg-[#002a5c]"
                >
                  Get Learning Roadmap
                </Button>
                <Button 
                  onClick={() => navigate('/progress')}
                  variant="outline"
                  className="border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white"
                >
                  Track Progress
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
              Answer honestly to get the best career recommendations tailored for you
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
                    className={`w-full text-left p-4 rounded-lg border transition-all hover:shadow-md ${
                      answers[currentQuestion] === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
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
