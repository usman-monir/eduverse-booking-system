
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockCourses, mockClassSessions } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import DashboardLayout from '@/components/Layout/DashboardLayout';

const Dashboard = () => {
  const { user } = useAuth();
  
  const nextClass = mockClassSessions.find(session => 
    session.status === 'booked' && session.studentId === user?.id
  );

  const activeCourses = mockCourses.filter(course => course.status === 'active');

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-blue-100">
            Ready to continue your learning journey? You have {activeCourses.length} active courses.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeCourses.length}</div>
              <p className="text-xs text-muted-foreground">
                Continue your progress
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Class</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {nextClass ? 'Today' : 'None'}
              </div>
              <p className="text-xs text-muted-foreground">
                {nextClass ? `${nextClass.time} - ${nextClass.subject}` : 'No upcoming classes'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(activeCourses.reduce((acc, course) => acc + course.progress, 0) / activeCourses.length)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Across all courses
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Next Class Section */}
        {nextClass && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Upcoming Class</CardTitle>
              <CardDescription className="text-orange-600">
                Your next scheduled session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{nextClass.subject}</h3>
                  <p className="text-gray-600">with {nextClass.tutor}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>📅 {nextClass.date}</span>
                    <span>🕐 {nextClass.time}</span>
                    <span>⏰ {nextClass.duration}</span>
                  </div>
                </div>
                <Button>Join Class</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Active Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Active Courses</h2>
            <Link to="/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.progress}%</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {course.instructor} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <Link to={`/courses/${course.id}`}>
                      <Button className="w-full">Continue Learning</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/book-class">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold">Book a Class</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Schedule a session with your tutor
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/messages">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold">Messages</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Chat with tutors and get support
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/courses">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold">Study Materials</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Access your course content
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
