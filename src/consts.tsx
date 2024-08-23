import { type Person, type Assignment, type Notification } from '@/types';

export const PEOPLE: Person[] = [
  {
    id: '1',
    name: 'Marie the Chef',
    role: 'Culinary Expert',
    description:
      'Marie shares her decades of experience in culinary arts, offering recipes and cooking tips to elevate your home dining experience.',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '2',
    name: 'Carlos Gardener',
    role: 'Gardening Enthusiast',
    description:
      'Carlos brings greenery into your life with gardening tips, plant care advice, and landscape design ideas.',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '3',
    name: 'Emma Photographer',
    role: 'Professional Photographer',
    description:
      'Explore the art of photography with Emma as she delves into techniques for capturing the perfect shot.',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '4',
    name: 'Dave Cyclist',
    role: 'Adventure Cyclist',
    description:
      'Join Dave on breathtaking cycling adventures across mountains and through rural landscapes.',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '5',
    name: 'Lily Potter',
    role: 'Pottery Artist',
    description:
      'Lily teaches the joy of pottery making, from the wheel to the kiln. Discover how to make beautiful and functional art.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: '6',
    name: 'Sophie Yoga Instructor',
    role: 'Yoga Teacher',
    description:
      'Sophie helps you align your body and mind with yoga practices suitable for all levels.',
    image:
      'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  },
];

export const ASSIGNMENTS: Assignment[] = [
    {
      id: '1',
      name: 'Assignment #1, COMP 101',
      role: 'Lecturer Culry',
      description:
        'CPSC 101 / WMST 201: Connecting with Computer Science.',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '2',
      name: 'Assignment #3, CPSC 436',
      role: 'Professor Emma',
      description:
        'CPSC 436 is a set of innovative "topics courses".',
      image:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '3',
      name: 'Assignment #4, CPSC 354',
      role: 'Lecturer Jhon',
      description:
        'Each course\'s calendar entry is the official record of its prerequisites.',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '4',
      name: 'Assignment #6, CPSC 357',
      role: 'Prof Dave',
      description:
        'The nodes and arrows show the dependencies between courses.',
      image:
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '5',
      name: 'Assignment #7, CPSC 896',
      role: 'Prof Potter',
      description:
        'Applied Science students normally cannot appeal because the ECE.',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '6',
      name: 'Assignment #8, CPSC 115',
      role: 'Lecturer Sophie',
      description:
        'AUD standings do not fulfill prerequisites.',
      image:
        'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
        id: '7',
        name: 'Assignment #11, CPSC 263',
        role: 'Prof Potter',
        description:
          'CPSC curriculum committees have already agreed upon all acceptable prerequisite paths.',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      },
      {
        id: '8',
        name: 'Assignment #12, CPSC 232',
        role: 'Lecturer Sophie',
        description:
          'If you are not a CPSC/CPEN specialization student but meet the full prerequisites.',
        image:
          'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      },
];

export const NOTIFICATIONS: Notification[] = [
    {
      id: '1',
      name: '#1, 2024-01-31, CPSC 355 Course change',
      role: 'CS Department',
      description:
        'Dear MSU101 Students, I’m writing to let you know that we will be making a change.',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '2',
      name: '#2, 2024-01-23, SCSC 677 Course change',
      role: 'SC Department',
      description:
        'Class will be held on {Zoom, Teams, or other meeting location}.',
      image:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '3',
      name: '#3, 2024-01-21, AASC 355 Change of lecture hours',
      role: 'ART Department',
      description:
        'Office hours will be held virtually at ....',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '4',
      name: '#4, 2024-01-03, CPSC 333 New Course Notify',
      role: 'ART Department',
      description:
        'The nodes and arrows show the dependencies between courses.',
      image:
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '5',
      name: '#7, 2024-01-11, SCSC 432 Course change',
      role: 'CS Department',
      description:
        'Applied Science students normally cannot appeal because the ECE.',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: '6',
      name: '#6, 2024-01-21, CPSC 387 Assignment Due',
      role: 'Personal',
      description:
        'AUD standings do not fulfill prerequisites.',
      image:
        'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
        id: '7',
        name: '#9, 2024-02-11, CPSC 255 Syllabus change',
        role: 'SC Department',
        description:
          'CPSC curriculum committees have already agreed upon all acceptable prerequisite paths.',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      },
      {
        id: '8',
        name: '#8, 2024-03-21, CPSC 332 Course change',
        role: 'CS Department',
        description:
          'If you are not a CPSC/CPEN specialization student but meet the full prerequisites.',
        image:
          'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      },
];
  