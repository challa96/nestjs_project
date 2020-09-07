import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CreateBookDto } from './models/create-book.model';
import { UpdateBookDto } from './models/update-book.model';
import { BookInput } from './inputs/book.input';
import { UpdateBook } from './inputs/updateBook.input';
import { BookEntity } from './books.entity';
import { BookService } from './book.service';
import { AuthorService } from 'src/authors/author.service';

@Resolver(of=> CreateBookDto)
export class BookResolver{
    constructor(private readonly bookService:BookService, private readonly authorService:AuthorService ) {}   

    @Query(()=> [CreateBookDto])
    async books(){
        return  await this.bookService.getBooks();
    }

    @ResolveField()
    async author(@Parent() books:CreateBookDto){
        let { id } = books;
        return await this.authorService.getAuthor(id);
    }

    @Query(()=> CreateBookDto)
    async book(@Args('id') id:number){
        let data = await this.bookService.getBook(id);
        if(!data){
            throw new Error("Book not Found")
        }
        return data;
    }

    @Mutation(()=> CreateBookDto)
    async createBook(@Args('data') data:BookInput){
        return await this.bookService.createBook(data);
    }

    @Mutation(()=>UpdateBookDto)
    async updateBook(@Args('id') id:number, @Args('data') data:UpdateBook){
        return await this.bookService.updateBook(id,data);
    }

    @Mutation(()=> Boolean)
    async deleteBook(@Args('id') id:number){
        return this.bookService.deleteBook(id);
    }


}
