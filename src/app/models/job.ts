import { Category } from "./category";

export class Job{
    id: number;
    company: string;
    category: Category;
    type: string;
    url: string;
    position: string;
    location: string;
    email: string;
    description: string;
    logo: string;
    date: Date;

}