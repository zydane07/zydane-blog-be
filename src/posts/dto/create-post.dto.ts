import { Author } from '@prisma/client';
import { MaxLength, IsEnum, MinLength } from 'class-validator';

export class CreatePostDto {
  @MinLength(5)
  @MaxLength(50)
  title: string;

  @MinLength(5)
  body: string;

  @IsEnum(Author)
  author: Author;
}
