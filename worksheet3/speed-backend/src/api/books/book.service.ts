import { Injectable } from "@nestjs/common";
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createBookDto } from "./create-book.dto";

@Injectable()
export class BookService{
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}
    

    test(): string{
        return 'book route testing';
    }

    // creating asynchronous requests to the model.
    // Uses a promise object to handle the operation.
    async findAll(): Promise<Book[]>{
        return await this.bookModel.find().exec();
    }

    async findOne(id: string): Promise<Book>{
        return await this.bookModel.findById(id).exec();
    }

    async create(createBookDto: createBookDto){
        return await this.bookModel.create(createBookDto);
    }

    async update(id: string, createBookDto: createBookDto){
        return await this.bookModel.findByIdAndUpdate(id, createBookDto).exec();
    }

    async delete(id:string){
        const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
        return deletedBook;
    }
}