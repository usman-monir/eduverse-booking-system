
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress: number;
  status: 'active' | 'completed' | 'not-started';
  thumbnail: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'quiz';
  duration: string;
  completed: boolean;
}

export interface ClassSession {
  id: string;
  subject: string;
  tutor: string;
  date: string;
  time: string;
  duration: string;
  status: 'available' | 'booked' | 'completed';
  studentId?: string;
  meetingLink?: string;
  description?: string;
}

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}
