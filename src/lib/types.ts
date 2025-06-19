export interface Course {
  id: string;
  name: string;
  college: string;
  description: string;
  duration?: string;
  requirements?: string[];
  category?: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface FinancialAidOpportunity {
  id: string;
  name: string;
  provider: string;
  description: string;
  eligibility?: string[];
  deadline?: string;
  type: 'Scholarship' | 'Bursary' | 'Loan';
  amount?: string;
  applicationLink?: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface WellbeingResource {
  id: string;
  title: string;
  description: string;
  category: string;
  contentUrl?: string; // Link to an article, video, etc.
  contactInfo?: string; // For support lines
  imageUrl?: string;
  imageHint?: string;
}

export interface CollegeRecommendation {
  name: string;
  description: string;
  reasons: string;
}

export interface CourseRecommendation {
  name: string;
  college: string;
  description: string;
  reasons: string;
}

export interface FinancialAidRecommendation {
  name: string;
  description: string;
  reasons: string;
}
