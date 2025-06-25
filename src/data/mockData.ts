
import { Course, ClassSession, Message } from '@/types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Comprehensive calculus and algebra course for advanced students',
    instructor: 'Dr. Sarah Wilson',
    progress: 75,
    status: 'active',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    duration: '12 weeks',
    lessons: [
      { id: '1', title: 'Introduction to Calculus', type: 'video', duration: '45 min', completed: true },
      { id: '2', title: 'Derivatives and Applications', type: 'pdf', duration: '30 min', completed: true },
      { id: '3', title: 'Integration Techniques', type: 'video', duration: '60 min', completed: false },
      { id: '4', title: 'Practice Quiz', type: 'quiz', duration: '20 min', completed: false }
    ]
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    description: 'Basic principles of mechanics, thermodynamics, and electromagnetism',
    instructor: 'Prof. Michael Johnson',
    progress: 45,
    status: 'active',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    duration: '10 weeks',
    lessons: [
      { id: '1', title: 'Newton\'s Laws', type: 'video', duration: '40 min', completed: true },
      { id: '2', title: 'Energy and Work', type: 'pdf', duration: '25 min', completed: false },
      { id: '3', title: 'Thermodynamics Basics', type: 'video', duration: '50 min', completed: false }
    ]
  },
  {
    id: '3',
    title: 'Computer Science Basics',
    description: 'Introduction to programming concepts and algorithms',
    instructor: 'Dr. Emily Chen',
    progress: 90,
    status: 'active',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    duration: '8 weeks',
    lessons: [
      { id: '1', title: 'Programming Fundamentals', type: 'video', duration: '60 min', completed: true },
      { id: '2', title: 'Data Structures', type: 'pdf', duration: '35 min', completed: true },
      { id: '3', title: 'Algorithm Analysis', type: 'video', duration: '45 min', completed: true }
    ]
  }
];

export const mockClassSessions: ClassSession[] = [
  {
    id: '1',
    subject: 'Advanced Mathematics',
    tutor: 'Dr. Sarah Wilson',
    date: '2024-06-28',
    time: '10:00',
    duration: '1 hour',
    status: 'available'
  },
  {
    id: '2',
    subject: 'Physics Fundamentals',
    tutor: 'Prof. Michael Johnson',
    date: '2024-06-28',
    time: '14:00',
    duration: '1.5 hours',
    status: 'booked',
    studentId: '1'
  },
  {
    id: '3',
    subject: 'Computer Science Basics',
    tutor: 'Dr. Emily Chen',
    date: '2024-06-29',
    time: '09:00',
    duration: '2 hours',
    status: 'available'
  },
  {
    id: '4',
    subject: 'Advanced Mathematics',
    tutor: 'Dr. Sarah Wilson',
    date: '2024-06-29',
    time: '15:00',
    duration: '1 hour',
    status: 'available'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Dr. Sarah Wilson',
    content: 'Your assignment submission has been reviewed. Great work on the calculus problems!',
    timestamp: '2024-06-25T10:30:00Z',
    read: false
  },
  {
    id: '2',
    sender: 'System',
    content: 'Reminder: Your Physics class is scheduled for tomorrow at 2:00 PM',
    timestamp: '2024-06-25T09:00:00Z',
    read: true
  },
  {
    id: '3',
    sender: 'Prof. Michael Johnson',
    content: 'New study materials have been uploaded for the thermodynamics chapter.',
    timestamp: '2024-06-24T16:45:00Z',
    read: true
  }
];

export const whatsappTemplates = [
  {
    id: '1',
    title: 'Class Reminder',
    template: 'Hi {{student_name}}, your {{subject}} class with {{tutor}} is starting in 1 hour. Join link: {{meeting_link}}',
    category: 'Reminders'
  },
  {
    id: '2',
    title: 'Progress Update',
    template: 'Great progress {{student_name}}! You\'ve completed {{progress}}% of your {{course_name}} course. Keep it up!',
    category: 'Progress'
  },
  {
    id: '3',
    title: 'Assignment Due',
    template: 'Don\'t forget {{student_name}}, your {{assignment_name}} assignment is due tomorrow. Submit it through the portal.',
    category: 'Assignments'
  },
  {
    id: '4',
    title: 'Welcome Message',
    template: 'Welcome to our learning platform {{student_name}}! Your enrollment in {{course_name}} is confirmed. Happy learning!',
    category: 'Welcome'
  }
];
