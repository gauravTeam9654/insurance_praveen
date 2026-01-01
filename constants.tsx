
import React from 'react';
import { 
  HeartPulse, 
  ShieldCheck, 
  Car, 
  Home, 
  Plane, 
  Briefcase,
  Headphones,
  CheckCircle,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { Service, Testimonial, PricingPlan, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Protect your family\'s financial future with our comprehensive life coverage tailored to your needs.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Access world-class medical care without financial stress. Premium health plans for you and yours.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vehicle',
    title: 'Vehicle Insurance',
    description: 'Drive with peace of mind. Full protection against accidents, theft, and natural disasters.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Your home is your sanctuary. Keep it safe with coverage against fire, floods, and break-ins.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    description: 'Explore the world worry-free. Instant medical assistance and trip cancellation protection.',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Custom risk management solutions for startups and large enterprises to scale safely.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'InsurePro helped me secure my startup during a critical growth phase. Their team is professional and truly cares.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Home Owner',
    content: 'The claims process was surprisingly fast. I had my roof repaired within days after the storm. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Frequent Traveler',
    content: 'I never fly without their travel plan. It saved me thousands during an emergency in Japan last year.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 4
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic Shield',
    price: '$29',
    features: ['Standard Coverage', 'Email Support', '1-Day Claim Processing', 'Mobile App Access']
  },
  {
    name: 'Family Pro',
    price: '$89',
    recommended: true,
    features: ['Extended Family Coverage', 'Priority 24/7 Support', 'Fast-Track Claims', 'Personal Agent', 'Global Assistance']
  },
  {
    name: 'Enterprise Elite',
    price: 'Custom',
    features: ['Risk Management', 'Dedicated Team', 'Global Assets Protection', 'Custom Policy Design', 'Full Legal Support']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '5 Tips to Lower Your Premium',
    excerpt: 'Learn how simple lifestyle changes can reduce your monthly insurance costs significantly.',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Why Health Insurance is Crucial in 2024',
    excerpt: 'Exploring the latest trends in medical technology and how they affect your health coverage.',
    date: 'June 05, 2024',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
];
