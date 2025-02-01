export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
  itemCount: number;
}

export interface CategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CategoryList[];
}

export interface CategoryList {
  id: number;
  title: string;
  image: string | null;
  children: CategoryList[];
}

export interface ClockProps {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
} 