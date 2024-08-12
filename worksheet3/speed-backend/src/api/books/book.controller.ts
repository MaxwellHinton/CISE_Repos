import{
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { createBookDto } from './create-book.dto';
import { error } from 'console';

@Controller('api/books')
export class BookController{
    constructor(private readonly bookService: BookService){}

    // test request to check for controller->service interactivity.
    @Get('/test')
    test(){
        return this.bookService.test();
    }

    // get all books request
    @Get('/')
    async findAll(){
        try {
            return this.bookService.findAll();
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No books found',
                },
                HttpStatus.NOT_FOUND,
                { cause: error},
            );
        }
    }

    // Get 1 book via ID.
    @Get('/:id')
    async findOne(@Param('id') id: string) {
        try {
            return this.bookService.findOne(id);
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No Book found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    // create/add a book
    @Post('/')
    async addBook(@Body() createBookDto: createBookDto){
        try{
            await this.bookService.create(createBookDto);
            return { message: 'Book added successfully'};
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Unable to add this book',
                },
                HttpStatus.BAD_REQUEST,
                { cause: error},
            );
        }
    }

    // Update a book
    @Put('/:id')
    async updateBook(
        @Param('id') id: string,
        @Body() createBookDto: createBookDto,
    ) {
        try {
            await this.bookService.update(id, createBookDto);
            return { message: 'Book updated successfully' };
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Unable to update this book',
                },
                HttpStatus.BAD_REQUEST,
                { cause: error },
            );
        }
    }

    // deleting a book via ID
    @Delete('/:id')
    async deleteBook(@Param('id') id: string) {
        try {
            return await await this.bookService.delete(id);
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No such book exists',
                },
                HttpStatus.NOT_FOUND,
                { cause: error},
            );
        }
    }
}