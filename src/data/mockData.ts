
import { ClassSession, Message } from '@/types';

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
