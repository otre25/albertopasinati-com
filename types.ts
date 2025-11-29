import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  number: string;
  description?: string;
  client?: string;
  services?: string[];
  websiteUrl?: string;
  mockupUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'orange' | 'green' | 'black';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PhilosophyPoint {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
}