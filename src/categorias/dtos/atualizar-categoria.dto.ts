import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsOptional,
} from 'class-validator';
import { Evento } from '../interfaces/categoria.interface';

export class AtualizarCategoriaDto {
  @IsString()
  @IsOptional()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;

  @IsString()
  @IsNotEmpty()
  readonly categoria: string;
}
