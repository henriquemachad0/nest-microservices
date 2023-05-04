import { IsNotEmpty } from 'class-validator';
import { IsEmail } from 'class-validator/types/decorator/decorators';

export class CriarJogadorDto {
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  nome: string;
}
