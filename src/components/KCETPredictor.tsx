
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, MapPin, AlertCircle, Award, Building, ExternalLink, Zap, Droplet } from 'lucide-react';

interface College {
  'College Name': string;
  Location: string;
  Website: string;
  Branch: string;
  Category: string;
  'Cutoff Rank': string;
  Year: string;
}

const KCETPredictor = () => {
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [math, setMath] = useState('');
  const [kcetScore, setKcetScore] = useState('');
  const [branch, setBranch] = useState('');
  const [category, setCategory] = useState('');
  const [predicted, setPredicted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [animateResult, setAnimateResult] = useState(false);

  // College data - in a real app, this would be loaded from an API
  const collegeData: College[] = [
    {
      'College Name': 'Ramaiah Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://msrit.edu',
      Branch: 'CSE',
      Category: 'GM',
      'Cutoff Rank': '1626',
      Year: '2024'
    },
    {
      'College Name': 'Ramaiah Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://msrit.edu',
      Branch: 'CSE',
      Category: 'SC',
      'Cutoff Rank': '14053',
      Year: '2024'
    },
    {
      'College Name': 'Ramaiah Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://msrit.edu',
      Branch: 'CSE',
      Category: 'ST',
      'Cutoff Rank': '15288',
      Year: '2024'
    },
    {
      'College Name': 'Ramaiah Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://msrit.edu',
      Branch: 'CSE',
      Category: 'OBC',
      'Cutoff Rank': '5000',
      Year: '2024'
    },
    {
      'College Name': 'BMS College of Engineering',
      Location: 'Bangalore',
      Website: 'https://bmsce.ac.in',
      Branch: 'CSE',
      Category: 'GM',
      'Cutoff Rank': '2500',
      Year: '2024'
    },
    {
      'College Name': 'BMS College of Engineering',
      Location: 'Bangalore',
      Website: 'https://bmsce.ac.in',
      Branch: 'CSE',
      Category: 'SC',
      'Cutoff Rank': '4131',
      Year: '2024'
    },
    {
      'College Name': 'BMS Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://bmsit.ac.in',
      Branch: 'CSE',
      Category: 'GM',
      'Cutoff Rank': '8730',
      Year: '2024'
    },
    {
      'College Name': 'PES College of Engineering',
      Location: 'Bangalore',
      Website: 'https://pes.edu',
      Branch: 'CSE',
      Category: 'GM',
      'Cutoff Rank': '31799',
      Year: '2024'
    },
    {
      'College Name': 'Siddaganga Institute of Technology',
      Location: 'Bangalore',
      Website: 'https://sit.ac.in',
      Branch: 'CSE',
      Category: 'GM',
      'Cutoff Rank': '10057',
      Year: '2024'
    }
  ];

  const totalStudents = 311991;

  const validateInput = (value: string, maxValue: number): boolean => {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue >= 0 && numValue <= maxValue;
  };

  const calculateRank = () => {
    const physicsNum = parseFloat(physics);
    const chemistryNum = parseFloat(chemistry);
    const mathNum = parseFloat(math);
    const kcetNum = parseFloat(kcetScore);
    
    if (!physicsNum || !chemistryNum || !mathNum || !kcetNum) return 0;
    
    // Calculate PCM average
    const pcmAvg = (physicsNum + chemistryNum + mathNum) / 3;
    
    // Normalize KCET score to percentage
    const kcetNormalized = (kcetNum / 180) * 100;
    
    // Calculate final score (equal weightage to PCM and KCET)
    const finalScore = (pcmAvg + kcetNormalized) / 2;
    
    // Calculate percentile
    const percentile = finalScore;
    
    // Predict rank based on percentile
    const predictedRank = Math.max(1, Math.ceil(((100 - percentile) / 100) * totalStudents));
    
    return { predictedRank, percentile };
  };

  const getEligibleColleges = (rank: number) => {
    return collegeData.filter(college => 
      college.Branch === branch && 
      college.Category === category && 
      parseInt(college['Cutoff Rank']) >= rank
    );
  };

  const getConfidenceLevel = (cutoffRank: number, predictedRank: number) => {
    const rankDiff = cutoffRank - predictedRank;
    if (rankDiff > 1000) return { level: 'high', color: 'bg-green-500', text: 'High Chance' };
    if (rankDiff > 500) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium Chance' };
    return { level: 'low', color: 'bg-red-500', text: 'Low Chance' };
  };

  const handlePredict = () => {
    if (!physics || !chemistry || !math || !kcetScore || !branch || !category) return;
    
    // Validate inputs
    if (!validateInput(physics, 100) || !validateInput(chemistry, 100) || 
        !validateInput(math, 100) || !validateInput(kcetScore, 180)) {
      return;
    }

    const result = calculateRank();
    
    // Show confetti for top performers
    if (result.percentile >= 90) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
    
    setPredicted(true);
    setAnimateResult(true);
    
    console.log('Predicting KCET rank for:', { physics, chemistry, math, kcetScore, branch, category });
  };

  const { predictedRank, percentile } = calculateRank();
  const eligibleColleges = getEligibleColleges(predictedRank);

  return (
    <section id="kcet-predictor" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-4 animate-fade-in">
            KCET Rank Predictor
          </h2>
          <p className="text-xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-semibold">
            Estimate your rank and get personalized college suggestions instantly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#001f3f] to-blue-600 text-white">
              <CardTitle className="flex items-center text-xl">
                <Calculator className="mr-3 h-6 w-6" />
                Enter Your Marks
              </CardTitle>
              <CardDescription className="text-blue-100">
                Provide your details for accurate KCET rank prediction
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="physics" className="text-[#001f3f] font-medium flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Physics (out of 100)
                  </Label>
                  <Input
                    id="physics"
                    type="number"
                    placeholder="e.g., 85"
                    value={physics}
                    onChange={(e) => setPhysics(e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                    min="0"
                    max="100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chemistry" className="text-[#001f3f] font-medium flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Chemistry (out of 100)
                  </Label>
                  <Input
                    id="chemistry"
                    type="number"
                    placeholder="e.g., 82"
                    value={chemistry}
                    onChange={(e) => setChemistry(e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                    min="0"
                    max="100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="math" className="text-[#001f3f] font-medium flex items-center">
                    <Calculator className="mr-2 h-4 w-4" />
                    Math (out of 100)
                  </Label>
                  <Input
                    id="math"
                    type="number"
                    placeholder="e.g., 90"
                    value={math}
                    onChange={(e) => setMath(e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                    min="0"
                    max="100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kcet-score" className="text-[#001f3f] font-medium flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    KCET Score (out of 180)
                  </Label>
                  <Input
                    id="kcet-score"
                    type="number"
                    placeholder="e.g., 145"
                    value={kcetScore}
                    onChange={(e) => setKcetScore(e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                    min="0"
                    max="180"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch" className="text-[#001f3f] font-medium">
                    Preferred Branch
                  </Label>
                  <select
                    id="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="CE">Civil Engineering</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-[#001f3f] font-medium">
                    Category
                  </Label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select Category</option>
                    <option value="GM">General Merit</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">
                    This is an approximate prediction based on previous year trends. 
                    Actual results may vary.
                  </p>
                </div>
              </div>

              <Button 
                onClick={handlePredict}
                className="w-full bg-gradient-to-r from-[#001f3f] to-blue-600 hover:from-blue-600 hover:to-[#001f3f] text-white py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                disabled={!physics || !chemistry || !math || !kcetScore || !branch || !category}
              >
                Predict My Rank & Colleges
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardTitle className="flex items-center text-xl">
                <MapPin className="mr-3 h-6 w-6" />
                Prediction Results
              </CardTitle>
              <CardDescription className="text-green-100">
                {predicted ? "Based on your marks and historical data" : "Results will appear after prediction"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {predicted ? (
                <div className={`space-y-6 ${animateResult ? 'animate-fade-in' : ''}`}>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-semibold text-[#001f3f] mb-3 text-lg">Predicted KCET Rank</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-2 animate-scale-in">
                      {predictedRank.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">out of {totalStudents.toLocaleString()} students</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        percentile >= 90 ? 'bg-green-500' : 
                        percentile >= 75 ? 'bg-blue-500' : 
                        percentile >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      } animate-bounce`}>
                        Percentile: {percentile.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#001f3f] mb-4 text-lg">
                      Eligible Colleges ({eligibleColleges.length} found)
                    </h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {eligibleColleges.length > 0 ? (
                        eligibleColleges.map((college, index) => {
                          const cutoffRank = parseInt(college['Cutoff Rank']);
                          const confidence = getConfidenceLevel(cutoffRank, predictedRank);
                          
                          return (
                            <div 
                              key={index} 
                              className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-right"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h5 className="font-medium text-[#001f3f] flex items-center">
                                    <Building className="mr-2 h-4 w-4" />
                                    {college['College Name']}
                                  </h5>
                                  <p className="text-sm text-gray-600">{college.Location}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${confidence.color}`}>
                                  {confidence.text}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                                <div>Cutoff Rank: <span className="font-bold">{cutoffRank.toLocaleString()}</span></div>
                                <div>Rank Difference: <span className="font-bold">{(cutoffRank - predictedRank).toLocaleString()}</span></div>
                              </div>
                              
                              <a 
                                href={college.Website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-300"
                              >
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Visit Website
                              </a>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No colleges found matching your criteria. Consider exploring other branches or improving your score.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {eligibleColleges.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-800">
                        💡 <strong>Tip:</strong> Apply to multiple colleges and consider backup options from your eligible list.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500">
                  <Calculator className="h-20 w-20 mx-auto mb-6 opacity-50" />
                  <p className="text-lg">Enter your marks to see predictions</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Project done by <strong>SEC-A BATCH-3</strong>
        </div>
      </div>
    </section>
  );
};

export default KCETPredictor;
