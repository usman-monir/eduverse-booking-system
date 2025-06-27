
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Eye, Shield } from 'lucide-react';
import DashboardLayout from '@/components/Layout/DashboardLayout';

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');

  // Mock study materials
  const studyMaterials = [
    {
      id: '1',
      title: 'Mathematics - Calculus Notes',
      description: 'Comprehensive calculus study material covering derivatives and integrals',
      fileName: 'calculus-notes.pdf',
      subject: 'Mathematics',
      uploadedBy: 'Dr. Smith',
      uploadedAt: '2024-01-15',
      fileType: 'pdf' as const
    },
    {
      id: '2',
      title: 'Physics - Quantum Mechanics',
      description: 'Introduction to quantum mechanics and wave functions',
      fileName: 'quantum-mechanics.pdf',
      subject: 'Physics',
      uploadedBy: 'Prof. Johnson',
      uploadedAt: '2024-01-10',
      fileType: 'pdf' as const
    },
    {
      id: '3',
      title: 'Chemistry - Organic Compounds',
      description: 'Study guide for organic chemistry reactions',
      fileName: 'organic-chemistry.docx',
      subject: 'Chemistry',
      uploadedBy: 'Dr. Wilson',
      uploadedAt: '2024-01-08',
      fileType: 'docx' as const
    }
  ];

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === 'all' || material.subject === subjectFilter;
    
    return matchesSearch && matchesSubject;
  });

  const getFileTypeIcon = (fileType: string) => {
    return <FileText className="h-4 w-4" />;
  };

  const subjects = [...new Set(studyMaterials.map(m => m.subject))];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Study Materials</h1>
          <p className="text-gray-600">Access your learning resources and study materials</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search materials or subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={subjectFilter} onValueChange={setSubjectFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map(subject => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Materials Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{studyMaterials.length}</div>
              <p className="text-sm text-gray-600">Total Materials</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{subjects.length}</div>
              <p className="text-sm text-gray-600">Subjects</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {studyMaterials.filter(m => m.fileType === 'pdf').length}
              </div>
              <p className="text-sm text-gray-600">PDF Files</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">Protected</div>
              <p className="text-sm text-gray-600">View Only</p>
            </CardContent>
          </Card>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getFileTypeIcon(material.fileType)}
                    <Badge variant="outline">{material.fileType.toUpperCase()}</Badge>
                  </div>
                  <Shield className="h-4 w-4 text-gray-400" />
                </div>
                <CardTitle className="text-lg">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p>📚 Subject: {material.subject}</p>
                  <p>👨‍🏫 Uploaded by: {material.uploadedBy}</p>
                  <p>📅 Date: {material.uploadedAt}</p>
                  <p>📁 File: {material.fileName}</p>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" disabled>
                    <Eye className="h-4 w-4 mr-2" />
                    View (Protected)
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  <Shield className="h-3 w-3 inline mr-1" />
                  Content is protected from download and screenshots
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No study materials found matching your criteria.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudyMaterials;
