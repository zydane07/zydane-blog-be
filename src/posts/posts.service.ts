import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Author, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    console.log('hai dari luar');

    try {
      const { title, body, author } = createPostDto;

      console.log(createPostDto);

      const posts = await this.prisma.post.create({
        data: {
          title,
          body,
          author,
        },
      });
      console.log('sasa');

      return posts;
    } catch (error) {
      console.log(error);

      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      if (error.code === 'P2002') throw new ConflictException();
      //   if (error.code === 'P2032') throw new ConflictException();
    }
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
