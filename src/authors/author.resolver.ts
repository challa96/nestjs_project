import { Resolver, Mutation, Query, Args, Subscription } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { AuthorInput } from "./inputs/author.input";
import { UpdateAuthor } from "./inputs/updateAuthor.input";
import { AuthorEntity } from "./author.entity";


@Resolver((of)=>AuthorEntity)
export class AutorResolver{

    constructor(private readonly authorService:AuthorService){}

    @Mutation(()=>CreateAuthorDto)
    async createAuthor(@Args('data') data:AuthorInput){
        return await this.authorService.createAuthor(data);
    }

    @Mutation(()=>CreateAuthorDto)
    async updateAuthor(@Args('id') id:number, @Args('data') data:UpdateAuthor){
        return await this.authorService.updateAuthor(id,data);
    }

    @Mutation(()=> Boolean)
    async deleteAuthor(@Args('id') id:number){
        return await this.authorService.deleteAuthor(id);
    }

    @Query(()=>[CreateAuthorDto])
    async getAuthors(){
        return await this.authorService.getAllAuthors();
    }

    @Query(()=> CreateAuthorDto)
    async getAuthor(@Args('id') id:number){
        return await this.authorService.getAuthor(id);
    }

}