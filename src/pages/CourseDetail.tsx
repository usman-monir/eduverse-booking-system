
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockCourses } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { CheckCircle, PlayCircle, FileText, Brain, Lock, Shield } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = course.lessons.length;

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-5 w-5 text-red-500" />;
      case 'pdf':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'quiz':
        return <Brain className="h-5 w-5 text-purple-500" />;
      default:
        return null;
    }
  };

  const ContentViewer = ({ lesson }: { lesson: any }) => (
    <div className="space-y-4">
      {/* Content Protection Notice */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-orange-800">
          <Shield className="h-4 w-4" />
          <span className="font-medium">Protected Content</span>
        </div>
        <p className="text-sm text-orange-700 mt-1">
          This content is protected. Screenshots and downloads are disabled.
        </p>
      </div>

      {/* Simulated Content Viewer */}
      <div className="relative bg-black rounded-lg aspect-video flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-6xl mb-4">
            {lesson.type === 'video' ? '▶️' : lesson.type === 'pdf' ? '📄' : '🧠'}
          </div>
          <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
          <p className="text-gray-300">
            {lesson.type === 'video' && 'Video content would play here'}
            {lesson.type === 'pdf' && 'PDF content would display here'}
            {lesson.type === 'quiz' && 'Interactive quiz would load here'}
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>🚫 Screenshot disabled</span>
            <span>🔒 Download blocked</span>
          </div>
        </div>
        
        {/* Simulated protection overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
            <Lock className="h-3 w-3 inline mr-1" />
            PROTECTED
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Duration: {lesson.duration}
        </div>
        <Button>
          {lesson.completed ? 'Review' : 'Mark as Complete'}
        </Button>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Course Header */}
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-xl mb-4">{course.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span>👨‍🏫 {course.instructor}</span>
                <span>⏱️ {course.duration}</span>
                <span>📚 {totalLessons} lessons</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>
              You've completed {completedLessons} out of {totalLessons} lessons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3" />
              <div className="flex justify-between text-sm">
                <span>{completedLessons}/{totalLessons} lessons completed</span>
                <Badge className="bg-green-100 text-green-800">
                  {course.status === 'active' ? 'In Progress' : 'Completed'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons List */}
        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
            <CardDescription>
              Click on any lesson to start learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <Dialog key={lesson.id}>
                  <DialogTrigger asChild>
                    <div
                      className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      
                      <div className="flex-shrink-0">
                        {getLessonIcon(lesson.type)}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium">
                          {index + 1}. {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>{lesson.duration}</span>
                          <Badge variant="outline">
                            {lesson.type.toUpperCase()}
                          </Badge>
                        </div>
                      </div>

                      <Button variant="outline" size="sm">
                        {lesson.completed ? 'Review' : 'Start'}
                      </Button>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                      <DialogTitle>{lesson.title}</DialogTitle>
                      <DialogDescription>
                        {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} • {lesson.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <ContentViewer lesson={lesson} />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CourseDetail;
