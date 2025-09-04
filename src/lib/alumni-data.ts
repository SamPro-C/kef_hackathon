
export interface Alumni {
  name: string;
  image: string;
  alt: string;
  story: string;
  region: 'Rift Valley' | 'Nyanza' | 'Coast' | 'Western' | 'Eastern' | 'Central';
  careerField: 'Technology' | 'Healthcare' | 'Engineering' | 'Education' | 'Business';
  graduationYear: number;
}

export const alumniData: Alumni[] = [
  {
    name: 'James',
    image: 'https://picsum.photos/400/300?random=1',
    alt: 'James, a KEF Alumnus, now a software engineer.',
    story: 'From herding goats in Turkana to studying Computer Science in the USA, James is a testament to the power of education.',
    region: 'Rift Valley',
    careerField: 'Technology',
    graduationYear: 2021,
  },
  {
    name: 'Mary',
    image: 'https://picsum.photos/400/300?random=2',
    alt: 'Mary, a KEF Alumna, now a medical student.',
    story: 'Escaped early marriage, now a medical student and mentor to young girls in her community.',
    region: 'Rift Valley',
    careerField: 'Healthcare',
    graduationYear: 2022,
  },
  {
    name: 'Peter',
    image: 'https://picsum.photos/400/300?random=3',
    alt: 'Peter, a KEF Alumnus, now an engineer.',
    story: 'First in his family to graduate. Now an engineer building a new future for his village.',
    region: 'Nyanza',
    careerField: 'Engineering',
    graduationYear: 2019,
  },
  {
    name: 'Aisha',
    image: 'https://picsum.photos/400/300?random=7',
    alt: 'Aisha, a KEF Alumna, now a nurse.',
    story: 'After losing her parents, she had to drop out. KEF brought her back. Today, she\'s a nurse saving lives in her local clinic.',
    region: 'Coast',
    careerField: 'Healthcare',
    graduationYear: 2020,
  },
  {
    name: 'Kevin',
    image: 'https://picsum.photos/400/300?random=8',
    alt: 'Kevin, a KEF Alumnus, now a community leader.',
    story: 'He nearly gave up due to family hardship. Now, he’s a community leader and a KEF mentor for over 30 students.',
    region: 'Western',
    careerField: 'Education',
    graduationYear: 2018,
  },
  {
    name: 'Grace',
    image: 'https://picsum.photos/400/300?random=9',
    alt: 'Grace, a KEF Alumna, studying law.',
    story: 'She saw injustice in her village. Today, she\'s studying law to fight for the rights of girls who have no voice.',
    region: 'Central',
    careerField: 'Business',
    graduationYear: 2023,
  },
   {
    name: 'Samuel',
    image: 'https://picsum.photos/400/300?random=11',
    alt: 'Samuel, a KEF Alumnus, now a teacher.',
    story: 'Inspired by his teachers, Samuel is now an educator, shaping the next generation in his hometown.',
    region: 'Eastern',
    careerField: 'Education',
    graduationYear: 2020,
  },
  {
    name: 'Fatuma',
    image: 'https://picsum.photos/400/300?random=12',
    alt: 'Fatuma, a KEF Alumna, now an entrepreneur.',
    story: 'Started a successful business that employs other young women from her community.',
    region: 'Coast',
    careerField: 'Business',
    graduationYear: 2019,
  },
];
