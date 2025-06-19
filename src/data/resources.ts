import { ResourceCategory, Resource } from '../types'

/**
 * Campus resource data organized by categories
 * Each category contains 3 carefully curated resources that students would actually use
 */
export const resourcesData: ResourceCategory[] = [
  {
    id: 'relationships',
    name: 'Relationships & Community',
    description: 'Building meaningful connections and support networks on campus',
    icon: '👥',
    color: 'bg-blue-500',
    resources: [
      {
        id: 'peer-mentoring',
        name: 'Peer Mentoring Program',
        description: 'Connect with experienced students who can guide you through academic and social challenges',
        url: 'https://students.northeastern.edu/mentoring',
        category: 'relationships',
        tags: ['mentorship', 'peer-support', 'guidance'],
        isExternal: false
      },
      {
        id: 'student-organizations',
        name: 'Student Organizations Hub',
        description: 'Discover clubs, societies, and organizations that match your interests and passions',
        url: 'https://neu.campuslabs.com/engage',
        category: 'relationships',
        tags: ['clubs', 'activities', 'social'],
        isExternal: false
      },
      {
        id: 'residential-life',
        name: 'Residential Life Community',
        description: 'Build lasting friendships through residence hall activities and community events',
        url: 'https://www.northeastern.edu/reslife',
        category: 'relationships',
        tags: ['housing', 'community', 'events'],
        isExternal: false
      }
    ]
  },
  {
    id: 'career',
    name: 'Career Development',
    description: 'Professional growth, internships, and career planning resources',
    icon: '💼',
    color: 'bg-green-500',
    resources: [
      {
        id: 'coop-program',
        name: 'Co-op & Career Development',
        description: 'Access to internships, job opportunities, and career counseling services',
        url: 'https://www.northeastern.edu/careers',
        category: 'career',
        tags: ['internships', 'jobs', 'career-counseling'],
        isExternal: false
      },
      {
        id: 'linkedin-learning',
        name: 'LinkedIn Learning',
        description: 'Free access to professional development courses and skill-building resources',
        url: 'https://www.linkedin.com/learning',
        category: 'career',
        tags: ['skills', 'online-learning', 'professional-development'],
        isExternal: true
      },
      {
        id: 'industry-connections',
        name: 'Industry Networking Events',
        description: 'Connect with alumni and industry professionals through exclusive networking events',
        url: 'https://www.northeastern.edu/alumni/networking',
        category: 'career',
        tags: ['networking', 'alumni', 'industry'],
        isExternal: false
      }
    ]
  },
  {
    id: 'financial-aid',
    name: 'Financial Aid & Support',
    description: 'Financial assistance, scholarships, and money management resources',
    icon: '💰',
    color: 'bg-yellow-500',
    resources: [
      {
        id: 'student-financial-services',
        name: 'Student Financial Services',
        description: 'Comprehensive financial aid guidance, loan management, and payment plan options',
        url: 'https://www.northeastern.edu/sfs',
        category: 'financial-aid',
        tags: ['financial-aid', 'loans', 'payment-plans'],
        isExternal: false
      },
      {
        id: 'scholarship-portal',
        name: 'Scholarship Search Portal',
        description: 'Find and apply for scholarships that match your profile and academic achievements',
        url: 'https://northeastern.scholarshipuniverse.com',
        category: 'financial-aid',
        tags: ['scholarships', 'grants', 'funding'],
        isExternal: false
      },
      {
        id: 'emergency-funds',
        name: 'Emergency Financial Assistance',
        description: 'Support for students facing unexpected financial hardships or emergencies',
        url: 'https://www.northeastern.edu/deanofstudents/emergency-assistance',
        category: 'financial-aid',
        tags: ['emergency', 'crisis-support', 'immediate-help'],
        isExternal: false
      }
    ]
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    description: 'Physical and mental health resources for overall student wellbeing',
    icon: '🏥',
    color: 'bg-red-500',
    resources: [
      {
        id: 'health-center',
        name: 'University Health Center',
        description: 'Comprehensive medical services, preventive care, and health education',
        url: 'https://www.northeastern.edu/uhcs',
        category: 'health',
        tags: ['medical', 'healthcare', 'wellness'],
        isExternal: false
      },
      {
        id: 'counseling-services',
        name: 'Counseling & Mental Health',
        description: 'Professional counseling, therapy services, and mental health support programs',
        url: 'https://www.northeastern.edu/counseling',
        category: 'health',
        tags: ['mental-health', 'counseling', 'therapy'],
        isExternal: false
      },
      {
        id: 'recreation-center',
        name: 'Recreation & Fitness Center',
        description: 'State-of-the-art fitness facilities, group classes, and recreational activities',
        url: 'https://www.northeastern.edu/recreation',
        category: 'health',
        tags: ['fitness', 'recreation', 'sports'],
        isExternal: false
      }
    ]
  },
  {
    id: 'identity',
    name: 'Identity & Belonging',
    description: 'Inclusive communities and support for diverse student identities',
    icon: '🌈',
    color: 'bg-purple-500',
    resources: [
      {
        id: 'cultural-centers',
        name: 'Cultural & Identity Centers',
        description: 'Dedicated spaces for cultural celebration, identity exploration, and community building',
        url: 'https://www.northeastern.edu/culturalcenters',
        category: 'identity',
        tags: ['culture', 'identity', 'community'],
        isExternal: false
      },
      {
        id: 'lgbtqa-center',
        name: 'LGBTQA Resource Center',
        description: 'Safe space and resources for LGBTQA+ students and allies on campus',
        url: 'https://www.northeastern.edu/lgbtqa',
        category: 'identity',
        tags: ['lgbtqa', 'inclusive', 'support'],
        isExternal: false
      },
      {
        id: 'interfaith-center',
        name: 'Interfaith Spiritual Life',
        description: 'Multi-faith community supporting spiritual growth and religious practice',
        url: 'https://www.northeastern.edu/spirituallife',
        category: 'identity',
        tags: ['faith', 'spirituality', 'religious'],
        isExternal: false
      }
    ]
  },
  {
    id: 'academic-success',
    name: 'Academic Success',
    description: 'Study support, tutoring, and academic achievement resources',
    icon: '📚',
    color: 'bg-indigo-500',
    resources: [
      {
        id: 'learning-center',
        name: 'Learning Center & Tutoring',
        description: 'Free tutoring services, study groups, and academic skill development workshops',
        url: 'https://www.northeastern.edu/learningcenter',
        category: 'academic-success',
        tags: ['tutoring', 'study-groups', 'academic-support'],
        isExternal: false
      },
      {
        id: 'writing-center',
        name: 'University Writing Center',
        description: 'Expert writing support for assignments, research papers, and communication skills',
        url: 'https://www.northeastern.edu/writingcenter',
        category: 'academic-success',
        tags: ['writing', 'communication', 'papers'],
        isExternal: false
      },
      {
        id: 'library-resources',
        name: 'Snell Library Resources',
        description: 'Research assistance, study spaces, and extensive digital and physical collections',
        url: 'https://library.northeastern.edu',
        category: 'academic-success',
        tags: ['library', 'research', 'study-spaces'],
        isExternal: false
      }
    ]
  }
]
