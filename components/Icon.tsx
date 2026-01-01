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
  Clock,
  Star,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Bot,
  Zap,
  Globe,
  Menu,
  X
} from 'lucide-react';

const icons = {
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
  Clock,
  Star,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Bot,
  Zap,
  Globe,
  Menu,
  X
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};

export default Icon;
