import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvitadoExtra } from './entities/invitado-extra.entity';
import { CreateInvitadoExtraDto } from './dto/create-invitado-extra.dto';
import { UpdateInvitadoExtraDto } from './dto/update-invitado-extra.dto';
import { Invitado } from '../invitados/entities/invitado.entity';

@Injectable()
export class InvitadoExtraService {
  constructor(
    @InjectRepository(InvitadoExtra)
    private readonly invitadoExtraRepository: Repository<InvitadoExtra>,

    @InjectRepository(Invitado)
    private readonly invitadoRepository: Repository<Invitado>,
  ) {}

  async create(createInvitadoExtraDto: CreateInvitadoExtraDto) {
    const { nombre, invitadoId } = createInvitadoExtraDto;

    const invitado = await this.invitadoRepository.findOne({ where: { id: invitadoId } });

    if (!invitado) {
      throw new NotFoundException('El invitado no existe');
    }

    const nuevoInvitadoExtra = this.invitadoExtraRepository.create({
      nombre,
      invitado,
    });

    return this.invitadoExtraRepository.save(nuevoInvitadoExtra);
  }

  findAll() {
    return this.invitadoExtraRepository.find({ relations: ['invitado'] });
  }

  findOne(id: number) {
    return this.invitadoExtraRepository.findOne({ where: { id }, relations: ['invitado'] });
  }

  update(id: number, updateInvitadoExtraDto: UpdateInvitadoExtraDto) {
    return this.invitadoExtraRepository.update(id, updateInvitadoExtraDto);
  }

  remove(id: number) {
    return this.invitadoExtraRepository.delete(id);
  }
}
