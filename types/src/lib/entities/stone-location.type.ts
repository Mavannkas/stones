export interface StoneLocationObject {
  name: string;
  createdBy: string;
  findingDay: Date;
  country: string;
  city: string;
  state: string
  zipCode: string;
  description: string;
  street?: string;
  images?: string[];
  lat?: number;
  long?: number;
}