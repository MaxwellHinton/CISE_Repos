import { Date } from 'mongoose';

export class createBookDto{
    title : string;
    isbn : string;
    author : string;
    description : string;
    published_date : Date;
    publisher : string;
    updated_date : Date;
}