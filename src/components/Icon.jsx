import {
  Zap, Eye, EyeOff, Star, Sun, Search, Bell, Crown, Hourglass,
  Handshake, Calendar, Brain, MessageCircle, Globe, Compass,
  Lightbulb, Briefcase, Lock, Book, Heart, Key, Users, Rocket,
  Smile, ArrowRight, ArrowLeft, Moon, LogOut, Home, User,
  Sparkles, Bot, Eraser, X, Pencil, Camera, Plus, MessageSquare, Trash2,
  Check, CheckCheck, MoreVertical, UserPlus, Flag,
  Bookmark, Highlighter, Quote, FileText, DollarSign,
  Cpu, ShoppingCart, Truck, Battery, ChevronDown,
} from 'lucide-react';

const iconMap = {
  Zap, Eye, EyeOff, Star, Sun, Search, Bell, Crown, Hourglass,
  Handshake, Calendar, Brain, MessageCircle, Globe, Compass,
  Lightbulb, Briefcase, Lock, Book, Heart, Key, Users, Rocket,
  Smile, ArrowRight, ArrowLeft, Moon, LogOut, Home, User,
  Sparkles, Bot, Eraser, X, Pencil, Camera, Plus, MessageSquare, Trash2,
  Check, CheckCheck, MoreVertical, UserPlus, Flag,
  Bookmark, Highlighter, Quote, FileText, DollarSign,
  Cpu, ShoppingCart, Truck, Battery, ChevronDown,
};

export default function Icon({ name, size, className, style, ...props }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      size={size}
      className={className}
      style={style}
      {...props}
    />
  );
}

export function getIconKeys() {
  return Object.keys(iconMap);
}
