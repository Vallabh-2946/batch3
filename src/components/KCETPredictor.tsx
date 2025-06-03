
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, MapPin } from 'lucide-react';

const KCETPredictor = () => {
  const [pucMarks, setPucMarks] = useState('');
  const [kcetScore, setKcetScore] = useState('');
  const [predicted, setPredicted] = useState(false);

  const handlePredict = () => {
    if (pucMarks && kcetScore) {
      setPredicted(true);
      // Simulate prediction calculation
      console.log('Predicting KCET rank for:', { pucMarks, kcetScore });
    }
  };

  // Mock prediction results
  const predictedRank = Math.floor(Math.random() * 50000) + 5000;
  const eligibleColleges = [
    { name: "R.V. College of Engineering", branch: "Computer Science", cutoff: "12,000" },
    { name: "Bangalore Institute of Technology", branch: "Electronics", cutoff: "18,000" },
    { name: "BMS College of Engineering", branch: "Information Science", cutoff: "15,000" },
    { name: "PES University", branch: "Computer Science", cutoff: "20,000" },
  ];

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
                Provide your PUC percentage and KCET score for accurate predictions
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
                />
              </div>

              <div>
                <Label htmlFor="kcet-score" className="text-[#001f3f] font-medium">
                  KCET Score
                </Label>
                <Input
                  id="kcet-score"
                  type="number"
                  placeholder="e.g., 145"
                  value={kcetScore}
                  onChange={(e) => setKcetScore(e.target.value)}
                  className="mt-2"
                />
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
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#001f3f] mb-3">Eligible Colleges</h3>
                    <div className="space-y-3">
                      {eligibleColleges.map((college, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-[#001f3f]">{college.name}</div>
                          <div className="text-sm text-gray-600">{college.branch}</div>
                          <div className="text-sm text-green-600">Cutoff: {college.cutoff}</div>
                        </div>
                      ))}
                    </div>
                  </div>
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
