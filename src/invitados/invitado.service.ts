import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invitado } from './entities/invitado.entity';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';

@Injectable()
export class InvitadosService {
  constructor(
    @InjectRepository(Invitado)
    private readonly invitadoRepository: Repository<Invitado>,
  ) {}

  create(createInvitadoDto: CreateInvitadoDto) {
    return this.invitadoRepository.save(createInvitadoDto);
  }

  findAll() {
    return this.invitadoRepository.find({ relations: ['invitadosExtras'] });
  }

  findOne(id: number) {
    return this.invitadoRepository.findOne({ where: { id }, relations: ['invitadosExtras'] });
  }

  update(id: number, updateInvitadoDto: UpdateInvitadoDto) {
    return this.invitadoRepository.update(id, updateInvitadoDto);
  }

  remove(id: number) {
    return this.invitadoRepository.delete(id);
  }
}
