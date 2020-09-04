import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './models/create-book.model';
import { UpdateBookDto } from './models/update-book.model';
import { BookEntity } from './books.entity';

@Injectable()


export class BookService {
    constructor(@InjectRepository(BookEntity) private readonly BookRepository:Repository<BookEntity>){}

    
    async createBook(data:CreateBookDto) :Promise<BookEntity>{
        const book = new BookEntity();
        book.name = data.name;
        book.genre = data.genre;
        return await this.BookRepository.save(book);
        //return book;
    }

    async getBooks(){
        return await this.BookRepository.find();
    }

    async getBook(id:number){
        return await this.BookRepository.findOne({where: {id} });
    }

    async updateBook(id:number, data:CreateBookDto){
        const book = await this.BookRepository.findOne({where: {id} });
        if(!book){
            throw new Error("Book not found");
        }
        Object.assign(book,data)
        await this.BookRepository.save(book);
        
        return book;
    }

    async deleteBook(id:number){
        const book = await this.BookRepository.findOne({where: {id} });
        if(!book){
            throw new Error("Book not found");
        }
        await this.BookRepository.delete(id);
        return true;
    }
}


