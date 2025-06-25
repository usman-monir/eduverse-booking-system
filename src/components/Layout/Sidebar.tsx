
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  User, 
  MessageSquare, 
  Clock,
  ArrowUp,
  ArrowDown,
  BookOpen,
  Users,
  Settings
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const studentNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: User },
    { path: '/courses', label: 'My Courses', icon: Calendar },
    { path: '/book-class', label: 'Book a Class', icon: Clock },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
  ];

  const tutorNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: User },
    { path: '/courses', label: 'My Courses', icon: Calendar },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
    { path: '/admin/sessions', label: 'Manage Sessions', icon: Settings },
  ];

  const adminNavItems = [
    { path: '/admin', label: 'Admin Dashboard', icon: User },
    { path: '/admin/sessions', label: 'Manage Sessions', icon: Calendar },
    { path: '/admin/courses', label: 'Manage Courses', icon: BookOpen },
    { path: '/admin/students', label: 'View Students', icon: Users },
    { path: '/admin/whatsapp', label: 'WhatsApp Automation', icon: MessageSquare },
  ];

  const getNavItems = () => {
    if (user?.role === 'admin') return adminNavItems;
    if (user?.role === 'tutor') return tutorNavItems;
    return studentNavItems;
  };

  const navItems = getNavItems();

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-blue-600">EduPortal</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-2"
          >
            {isCollapsed ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg transition-colors duration-200",
                    isActive 
                      ? "bg-blue-100 text-blue-700" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        {!isCollapsed ? (
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src={user?.avatar || '/placeholder.svg'}
                alt={user?.name}
                className="w-8 h-8 rounded-full bg-gray-200"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {user?.role}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="w-full"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <img
              src={user?.avatar || '/placeholder.svg'}
              alt={user?.name}
              className="w-8 h-8 rounded-full bg-gray-200"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="p-2"
            >
              <span className="sr-only">Logout</span>
              →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
