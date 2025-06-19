
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserCircle, Edit3, Mail, Phone, BookUser, CalendarDays, ShieldAlert } from 'lucide-react';
import type { UserProfile } from '@/lib/types';

export const metadata: Metadata = {
  title: 'My Profile - EduConnect Kenya',
  description: 'View and manage your student profile.',
};

const mockUserProfile: UserProfile = {
  id: 'user001',
  name: 'Aisha Juma',
  studentId: 'STU2024/00123',
  email: 'aisha.juma@example.com',
  program: 'Bachelor of Science in Information Technology',
  yearOfStudy: 2,
  avatarUrl: 'https://placehold.co/128x128.png',
  avatarHint: 'profile avatar',
  contactNumber: '+254 700 123 456',
  emergencyContact: {
    name: 'Fatuma Ali',
    relationship: 'Mother',
    phone: '+254 700 654 321',
  },
};

export default function ProfilePage() {
  const user = mockUserProfile;

  return (
    <div className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          My Profile
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Your personal and academic information.
        </p>
      </header>

      <Card className="mx-auto max-w-3xl shadow-xl">
        <CardHeader className="flex flex-col items-center text-center border-b pb-6">
          <Avatar className="h-24 w-24 mb-4">
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.avatarHint} />}
            <AvatarFallback className="text-3xl">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="font-headline text-3xl">{user.name}</CardTitle>
          <CardDescription className="text-lg">{user.studentId}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <span className="font-medium text-muted-foreground">Email:</span>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <span className="font-medium text-muted-foreground">Contact Number:</span>
                  <p>{user.contactNumber || 'Not Provided'}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-xl font-semibold text-primary mb-3">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <BookUser className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <span className="font-medium text-muted-foreground">Program:</span>
                  <p>{user.program}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <span className="font-medium text-muted-foreground">Year of Study:</span>
                  <p>{user.yearOfStudy}</p>
                </div>
              </div>
            </div>
          </div>
          
          {user.emergencyContact && (
            <div>
              <h3 className="font-headline text-xl font-semibold text-primary mb-3">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <ShieldAlert className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium text-muted-foreground">Name:</span>
                    <p>{user.emergencyContact.name}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <span className="font-medium text-muted-foreground">Relationship:</span>
                    <p>{user.emergencyContact.relationship}</p>
                  </div>
                </div>
                <div className="md:col-span-2 flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-muted-foreground opacity-0 md:opacity-100" /> {/* Placeholder for alignment */}
                     <div>
                        <span className="font-medium text-muted-foreground">Phone:</span>
                        <p>{user.emergencyContact.phone}</p>
                    </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button variant="default" className="ml-auto">
            <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
