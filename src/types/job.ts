export interface Job {
  _id: string;
  title: string;
  type: string;
  location: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  offer?: string[];
  applicationLink: string;
}
