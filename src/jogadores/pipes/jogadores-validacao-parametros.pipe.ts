import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';

export class JogadoresValidacaoParametrosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(
        `O valor do parametro ${metadata.data} deve ser informado`,
      );
    }

    return value;
  }
}
