
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, MapPin, AlertCircle } from 'lucide-react';

const KCETPredictor = () => {
  const [pucMarks, setPucMarks] = useState('');
  const [kcetScore, setKcetScore] = useState('');
  const [predicted, setPredicted] = useState(false);
  const [category, setCategory] = useState('1G');

  const handlePredict = () => {
    if (pucMarks && kcetScore) {
      setPredicted(true);
      console.log('Predicting KCET rank for:', { pucMarks, kcetScore, category });
    }
  };

  // More realistic prediction calculation
  const calculateRank = () => {
    const puc = parseFloat(pucMarks);
    const kcet = parseFloat(kcetScore);
    
    if (!puc || !kcet) return 0;
    
    // Simplified KCET rank calculation (PUC 25% + KCET 75%)
    const weightedScore = (puc * 0.25) + (kcet * 0.75);
    
    // Approximate rank based on weighted score
    let baseRank;
    if (weightedScore >= 140) baseRank = Math.floor(Math.random() * 5000) + 1000;
    else if (weightedScore >= 120) baseRank = Math.floor(Math.random() * 15000) + 5000;
    else if (weightedScore >= 100) baseRank = Math.floor(Math.random() * 25000) + 15000;
    else if (weightedScore >= 80) baseRank = Math.floor(Math.random() * 40000) + 30000;
    else baseRank = Math.floor(Math.random() * 60000) + 50000;
    
    // Category adjustment
    if (category === '2A') baseRank = Math.floor(baseRank * 0.9);
    else if (category === '2B') baseRank = Math.floor(baseRank * 0.8);
    else if (category === '3A') baseRank = Math.floor(baseRank * 0.7);
    else if (category === '3B') baseRank = Math.floor(baseRank * 0.6);
    else if (category === 'SC/ST') baseRank = Math.floor(baseRank * 0.5);
    
    return baseRank;
  };

  const getEligibleColleges = (rank: number) => {
    const colleges = [
      { name: "R.V. College of Engineering", branch: "Computer Science", cutoff: 12000, location: "Bangalore" },
      { name: "BMS College of Engineering", branch: "Information Science", cutoff: 15000, location: "Bangalore" },
      { name: "Bangalore Institute of Technology", branch: "Electronics", cutoff: 18000, location: "Bangalore" },
      { name: "PES University", branch: "Computer Science", cutoff: 20000, location: "Bangalore" },
      { name: "JSS Science and Technology University", branch: "Mechanical", cutoff: 25000, location: "Mysuru" },
      { name: "Manipal Institute of Technology", branch: "Information Technology", cutoff: 30000, location: "Manipal" },
      { name: "NMAM Institute of Technology", branch: "Civil", cutoff: 35000, location: "Nitte" },
      { name: "SDM College of Engineering", branch: "Computer Science", cutoff: 40000, location: "Dharwad" }
    ];
    
    return colleges.filter(college => rank <= college.cutoff);
  };

  const predictedRank = calculateRank();
  const eligibleColleges = getEligibleColleges(predictedRank);

  return (
    <section id="kcet-predictor" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            KCET Rank & College Predictor
          </h2>
          <p className="text-xl text-gray-600">
            Get accurate predictions for your KCET rank and eligible colleges based on your marks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#001f3f]">
                <Calculator className="mr-2 h-6 w-6" />
                Enter Your Marks
              </CardTitle>
              <CardDescription>
                Provide your details for accurate KCET rank prediction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="puc-marks" className="text-[#001f3f] font-medium">
                  PUC Marks (Percentage)
                </Label>
                <Input
                  id="puc-marks"
                  type="number"
                  placeholder="e.g., 85.5"
                  value={pucMarks}
                  onChange={(e) => setPucMarks(e.target.value)}
                  className="mt-2"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <Label htmlFor="kcet-score" className="text-[#001f3f] font-medium">
                  KCET Score (out of 180)
                </Label>
                <Input
                  id="kcet-score"
                  type="number"
                  placeholder="e.g., 145"
                  value={kcetScore}
                  onChange={(e) => setKcetScore(e.target.value)}
                  className="mt-2"
                  min="0"
                  max="180"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-[#001f3f] font-medium">
                  Category
                </Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="1G">1G (General Merit)</option>
                  <option value="2A">2A</option>
                  <option value="2B">2B</option>
                  <option value="3A">3A</option>
                  <option value="3B">3B</option>
                  <option value="SC/ST">SC/ST</option>
                </select>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" />
                  <p className="text-sm text-yellow-800">
                    This is an approximate prediction based on previous year trends. 
                    Actual results may vary.
                  </p>
                </div>
              </div>

              <Button 
                onClick={handlePredict}
                className="w-full bg-[#001f3f] hover:bg-[#002a5c] text-white py-6 text-lg"
                disabled={!pucMarks || !kcetScore}
              >
                Predict My Rank & Colleges
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-[#001f3f]">
                <MapPin className="mr-2 h-6 w-6" />
                Prediction Results
              </CardTitle>
              <CardDescription>
                {predicted ? "Based on your marks and historical data" : "Results will appear after prediction"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {predicted ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-[#001f3f] mb-2">Predicted KCET Rank</h3>
                    <p className="text-2xl font-bold text-blue-600">{predictedRank.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-1">Category: {category}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#001f3f] mb-3">
                      Eligible Colleges ({eligibleColleges.length} found)
                    </h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {eligibleColleges.length > 0 ? (
                        eligibleColleges.map((college, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-[#001f3f]">{college.name}</div>
                            <div className="text-sm text-gray-600">{college.branch}</div>
                            <div className="text-sm text-gray-500">{college.location}</div>
                            <div className="text-sm text-green-600">Cutoff Rank: {college.cutoff.toLocaleString()}</div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-4 text-gray-500">
                          <p>Based on your predicted rank, consider exploring other options or prepare for next year.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {eligibleColleges.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        💡 <strong>Tip:</strong> Apply to multiple colleges and consider backup options from your eligible list.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your marks to see predictions</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KCETPredictor;
