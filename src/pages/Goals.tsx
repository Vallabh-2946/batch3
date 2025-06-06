
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Plus, Target, Calendar, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
  const navigate = useNavigate();
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([
    { id: 1, text: 'Complete JavaScript fundamentals', completed: false, dueDate: '2024-12-15', priority: 'high' },
    { id: 2, text: 'Build a React portfolio project', completed: false, dueDate: '2024-12-22', priority: 'medium' },
    { id: 3, text: 'Learn Git and GitHub basics', completed: true, dueDate: '2024-12-08', priority: 'high' }
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
          dueDate: nextWeek.toISOString().split('T')[0],
          priority: 'medium'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => navigate('/')} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#001f3f] mb-4">Weekly Goal Setter</h1>
          <p className="text-xl text-gray-600">Set achievable weekly goals and track your progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-[#001f3f]">{completionRate}%</h3>
                <p className="text-gray-600">Completion Rate</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-[#001f3f]">{completedGoals}</h3>
                <p className="text-gray-600">Goals Completed</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-[#001f3f]">{goals.length - completedGoals}</h3>
                <p className="text-gray-600">Active Goals</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#001f3f]">
              <Target className="mr-2 h-6 w-6" />
              Your Weekly Goals
            </CardTitle>
            <CardDescription>Add new goals and track your weekly progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add a new weekly goal..."
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
                  className={`p-4 rounded-lg border transition-all ${
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
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="flex-1">
                      <p className={`text-lg ${
                        goal.completed ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}>
                        {goal.text}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          Due: {new Date(goal.dueDate).toLocaleDateString()}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          goal.priority === 'high' ? 'bg-red-100 text-red-800' :
                          goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {goal.priority} priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-[#001f3f]">AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm">💡 Break down larger goals into smaller, manageable tasks for better success rates.</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm">🎯 Set SMART goals: Specific, Measurable, Achievable, Relevant, and Time-bound.</p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm">⚡ Focus on 3-5 goals per week to maintain quality over quantity.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
