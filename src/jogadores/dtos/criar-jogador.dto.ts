import { IsNotEmpty, IsEmail } from 'class-validator';

export class CriarJogadorDto {
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  nome: string;
}
