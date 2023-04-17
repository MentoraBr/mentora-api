import { IsNotEmpty, Length } from 'class-validator';

export class CreateMentor {
  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  email: string;
}
