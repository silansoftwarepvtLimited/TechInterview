export interface Course {
  id: number;
  title: string;
  slug: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  price: number;
  originalPrice: number;
  description: string;
  featured?: boolean;
}

export interface Tutorial {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  topics: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}