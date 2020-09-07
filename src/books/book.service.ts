import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './models/create-book.model';
import { UpdateBookDto } from './models/update-book.model';
import { BookEntity } from './books.entity';
import { UpdateBook } from './inputs/updateBook.input';
//import { AuthorService } from "../authors/author.service";
import { AuthorEntity } from 'src/authors/author.entity';
import { BookInput } from './inputs/book.input';

@Injectable()


export class BookService {
    constructor(@InjectRepository(BookEntity) private readonly BookRepository:Repository<BookEntity>){}

    
    async createBook(data:BookInput) :Promise<BookEntity>{
        /* const author = new AuthorEntity();
        author.name = 'hello bok';
        author.age = 23; */
        //this.authorRpository.createAuthor(author);
        const book = new BookEntity();
        book.name = data.name;
        book.genre = data.genre;
        book.authorId = data.authorId;
        
        return await this.BookRepository.save(book);
        //return book;
    }

    

    async getBooks(){
        return await this.BookRepository.find();
    }

    async getBook(id:number){
        return await this.BookRepository.findOne({where: {id}});
    }

    async getBookBasedOnAuthorId(id:number){
        return await this.BookRepository.find({authorId:id });
    }
    

    async updateBook(id:number, data:UpdateBookDto){
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
            throw new InternalServerErrorException("Book not found");
        }
        await this.BookRepository.delete(id);
        return true;
    }
}


