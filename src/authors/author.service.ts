import { Injectable, NotFoundException, HttpCode, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';


@Injectable()

export class AuthorService{
    constructor(@InjectRepository(AuthorEntity) private readonly AuthorRepository:Repository<AuthorEntity>){}

    async createAuthor(authordata:CreateAuthorDto): Promise<AuthorEntity>{
        let author = new AuthorEntity();
        author.name = authordata.name;
        author.age = authordata.age;
        return this.AuthorRepository.save(author);

    }

    async updateAuthor(id,data){
        let author = await this.AuthorRepository.findOne({where: {id}});
        if(!author){
            throw new InternalServerErrorException("Author not found");
        }
        Object.assign(author,data);
        return await this.AuthorRepository.save(author);
    }

    async deleteAuthor(id){
        let author = await this.AuthorRepository.findOne({where:{id}});
        if(!author){
            throw new NotFoundException("Author not found");
        }
        await this.AuthorRepository.delete(id);
        return true;
    }

    async getAllAuthors(){
        return await this.AuthorRepository.find();
    }

    async getAuthor(id){
        //let author = await this.AuthorRepository.findOne({where:{id}, relations:['books'] });
        let author = await this.AuthorRepository.findOne({where:{id}});
        if(!author){
            throw new BadRequestException({status:500,message:"Author not found"});
        }
        return author;
    }
}