
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, MapPin, Users, Calendar, BookOpen, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CollegeGuide = () => {
  const navigate = useNavigate();

  const cutoffTrends = [
    { college: 'Ramaiah Institute of Technology', branch: 'CSE', 2023: 1800, 2024: 1626, trend: 'down' },
    { college: 'BMS College of Engineering', branch: 'CSE', 2023: 2800, 2024: 2456, trend: 'down' },
    { college: 'PES Institute of Technology', branch: 'CSE', 2023: 3200, 2024: 3100, trend: 'down' },
    { college: 'Dayananda Sagar College', branch: 'CSE', 2023: 8500, 2024: 8230, trend: 'down' }
  ];

  const admissionTips = [
    {
      title: "Document Preparation",
      description: "Prepare all necessary documents including KCET scorecard, PUC marks card, and certificates",
      icon: BookOpen
    },
    {
      title: "Choice Filling Strategy",
      description: "Fill choices strategically - include safe options along with aspirational colleges",
      icon: TrendingUp
    },
    {
      title: "Counseling Process",
      description: "Understand the counseling rounds and be prepared for document verification",
      icon: Users
    },
    {
      title: "Seat Acceptance",
      description: "Know the deadlines for seat acceptance and fee payment to secure your admission",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#001f3f] mb-4">College Admission Guide</h1>
          <p className="text-xl text-gray-600">Strategic insights for KCET college admissions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cutoff Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#001f3f]">
                <TrendingUp className="mr-2 h-6 w-6" />
                Cutoff Trends (2023 vs 2024)
              </CardTitle>
              <CardDescription>Track how cutoff ranks have changed over the years</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cutoffTrends.map((trend, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{trend.college}</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{trend.branch}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span>2023: {trend[2023].toLocaleString()}</span>
                      <span className="mx-2">→</span>
                      <span>2024: {trend[2024].toLocaleString()}</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      trend.trend === 'down' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {trend.trend === 'down' ? '↓ Easier' : '↑ Harder'}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Admission Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#001f3f]">
                <Award className="mr-2 h-6 w-6" />
                Admission Strategy Tips
              </CardTitle>
              <CardDescription>Essential tips for successful college admission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {admissionTips.map((tip, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <tip.icon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Branch Wise Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-[#001f3f]">
              <MapPin className="mr-2 h-6 w-6" />
              Branch-wise Seat Matrix & Cutoffs
            </CardTitle>
            <CardDescription>Understand seat availability and competition for different branches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Computer Science (CSE)</h4>
                <p className="text-sm text-blue-700 mb-1">Most competitive branch</p>
                <p className="text-sm text-blue-600">Top college cutoff: ~1500-2000</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Electronics (ECE)</h4>
                <p className="text-sm text-green-700 mb-1">High demand, good placements</p>
                <p className="text-sm text-green-600">Top college cutoff: ~3000-5000</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Mechanical (ME)</h4>
                <p className="text-sm text-orange-700 mb-1">Core engineering branch</p>
                <p className="text-sm text-orange-600">Top college cutoff: ~8000-15000</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Electrical (EE)</h4>
                <p className="text-sm text-purple-700 mb-1">Traditional engineering</p>
                <p className="text-sm text-purple-600">Top college cutoff: ~10000-20000</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Civil (CE)</h4>
                <p className="text-sm text-yellow-700 mb-1">Infrastructure focus</p>
                <p className="text-sm text-yellow-600">Top college cutoff: ~15000-30000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Dates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-[#001f3f]">
              <Calendar className="mr-2 h-6 w-6" />
              Important Admission Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">KCET Result Declaration</span>
                <span className="text-sm text-gray-600">Usually in May</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Choice Filling Opens</span>
                <span className="text-sm text-gray-600">End of May</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">First Round Allotment</span>
                <span className="text-sm text-gray-600">Mid June</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Document Verification</span>
                <span className="text-sm text-gray-600">After each round</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeGuide;
