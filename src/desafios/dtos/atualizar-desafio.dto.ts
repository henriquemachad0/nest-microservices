import { DesafioStatus } from '../interfaces/desafio-status.enum';
import { IsOptional } from 'class-validator';

export class AtualizarDesafioDto {
  @IsOptional()
  dataHoraDesafio: Date;

  @IsOptional()
  status: DesafioStatus;
}
