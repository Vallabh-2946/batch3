
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Target, TrendingUp, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Progress = () => {
  const navigate = useNavigate();
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([
    { id: 1, text: 'Complete JavaScript fundamentals', completed: true, dueDate: '2024-01-15' },
    { id: 2, text: 'Build first React project', completed: false, dueDate: '2024-01-22' },
    { id: 3, text: 'Learn Node.js basics', completed: false, dueDate: '2024-01-29' }
  ]);

  const addGoal = () => {
    if (newGoal.trim()) {
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      
      setGoals([
        ...goals,
        {
          id: Date.now(),
          text: newGoal,
          completed: false,
          dueDate: nextWeek.toISOString().split('T')[0]
        }
      ]);
      setNewGoal('');
    }
  };

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const completedGoals = goals.filter(goal => goal.completed).length;
  const completionRate = Math.round((completedGoals / goals.length) * 100);

  const skills = [
    { name: 'JavaScript', progress: 85, level: 'Advanced' },
    { name: 'React', progress: 60, level: 'Intermediate' },
    { name: 'Node.js', progress: 30, level: 'Beginner' },
    { name: 'CSS', progress: 75, level: 'Intermediate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Progress */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#001f3f]">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Skill Progress
                </CardTitle>
                <CardDescription>Track your learning progress across different skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-600">{skill.progress}%</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#001f3f] mb-2">{completionRate}%</h3>
                  <p className="text-gray-600">Overall Completion Rate</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {completedGoals} of {goals.length} goals completed this week
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Goals */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#001f3f]">
                  <Target className="mr-2 h-6 w-6" />
                  Weekly Goals
                </CardTitle>
                <CardDescription>Set and track your weekly learning objectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a new goal..."
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                  />
                  <Button onClick={addGoal} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {goals.map((goal) => (
                    <div
                      key={goal.id}
                      className={`p-3 rounded-lg border transition-all ${
                        goal.completed 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={goal.completed}
                          onChange={() => toggleGoal(goal.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div className="flex-1">
                          <p className={`${
                            goal.completed ? 'line-through text-gray-500' : 'text-gray-900'
                          }`}>
                            {goal.text}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="mr-1 h-3 w-3" />
                            Due: {new Date(goal.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#001f3f]">AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm">💡 Focus on completing your React project this week to reinforce your learning.</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm">🚀 Consider starting backend development next week to become a full-stack developer.</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm">⭐ Great progress on JavaScript! You're ready for advanced concepts.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
