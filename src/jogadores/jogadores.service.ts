import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';
@Injectable()
export class JogadoresService {
  constructor(
    @InjectModel('Jogador') private readonly jogadorModule: Model<Jogador>,
  ) {}

  private readonly logger = new Logger(JogadoresService.name);
  async criarAtualizarJogador(
    criaJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    const { email } = criaJogadorDto;

    const jogadorEncontrado = await this.jogadorModule
      .findOne({
        email,
      })
      .exec();

    if (jogadorEncontrado) {
      throw new BadRequestException(
        `Jogador com e-mail ${email} já cadastrado`,
      );
    }

    const jogadorCriado = new this.jogadorModule(criaJogadorDto);
    return await jogadorCriado.save();
  }

  async atualizarJogador(
    _id: string,
    criaJogadorDto: CriarJogadorDto,
  ): Promise<void> {
    const jogadorEncontrado = await this.jogadorModule
      .findOne({
        _id,
      })
      .exec();

    if (!jogadorEncontrado) {
      throw new NotFoundException(`Jogador com id ${_id} não encontrado`);
    }

    await this.jogadorModule
      .findOneAndUpdate(
        {
          _id,
        },
        { $set: criaJogadorDto },
      )
      .exec();
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return await this.jogadorModule.find().exec();
  }

  async consultarJogadorPeloEmail(email: string): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorModule
      .findOne({
        email,
      })
      .exec();

    if (!jogadorEncontrado) {
      throw new NotFoundException(`Jogador com e-mail ${email} não encontrado`);
    }
    return jogadorEncontrado;
  }

  async deletarJogador(email: string): Promise<any> {
    return await this.jogadorModule.findOneAndRemove({ email }).exec();
  }
}
