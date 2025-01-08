export interface EducationDetails {
  schoolName: string;
  startYear: number;
  endYear: number;
  degree?: string;
  subject?: string;
  thesis?: string;
  grade?: number;
  location: string;
}

export interface WorkDetails {
  company: string;
  position: string;
  startYear: string;
  endYear: string;
  location: string;
  description: string;
}
