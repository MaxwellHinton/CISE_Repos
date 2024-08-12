import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Date, HydratedDocument} from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({ require:true})
    title: string;

    @Prop({ require:true})
    isbn: string;

    @Prop({ require:true})
    author: string;

    @Prop({ require:true})
    description: string;

    @Prop({ type: Date})
    published_date: Date;

    @Prop()
    publisher: string;

    @Prop({type: Date, default: Date.now})
    updated_date : Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);

