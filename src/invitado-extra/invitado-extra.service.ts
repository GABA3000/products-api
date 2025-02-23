import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvitadoExtra } from './entities/invitado-extra.entity';
import { CreateInvitadoExtraDto } from './dto/create-invitado-extra.dto';
import { UpdateInvitadoExtraDto } from './dto/update-invitado-extra.dto';

@Injectable()
export class InvitadoExtraService {
  constructor(
    @InjectRepository(InvitadoExtra)
    private readonly invitadoExtraRepository: Repository<InvitadoExtra>,
  ) {}

  create(createInvitadoExtraDto: CreateInvitadoExtraDto) {
    return this.invitadoExtraRepository.save(createInvitadoExtraDto);
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