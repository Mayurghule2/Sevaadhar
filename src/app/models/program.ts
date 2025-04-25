export interface Program {
  id?: number;
  title: string;
  description: string;
  type: 'EDUCATION' | 'HEALTHCARE' | 'FOOD_AND_NUTRITION' | 'WOMEN_EMPOWERMENT' | 'DISASTER_RELIEF' | 'COMMUNITY_DEVELOPMENT' | 'DIFFERENTLY_ABLED';
  location: string;
  startDate: string; // ISO string format e.g., "2025-04-18T00:00:00Z"
  endDate: string;
  imageFileName: string;
  brochureFileName: string;
  contactEmail: string;
  contactPhone: string;
  capacity: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
