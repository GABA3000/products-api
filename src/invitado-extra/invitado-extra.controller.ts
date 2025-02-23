import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitadoExtraService } from './invitado-extra.service';
import { CreateInvitadoExtraDto } from './dto/create-invitado-extra.dto';
import { UpdateInvitadoExtraDto } from './dto/update-invitado-extra.dto';

@Controller('invitado-extra')
export class InvitadoExtraController {
  constructor(private readonly invitadoExtraService: InvitadoExtraService) {}

  @Post()
  create(@Body() createInvitadoExtraDto: CreateInvitadoExtraDto) {
    return this.invitadoExtraService.create(createInvitadoExtraDto);
  }

  @Get()
  findAll() {
    return this.invitadoExtraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitadoExtraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvitadoExtraDto: UpdateInvitadoExtraDto) {
    return this.invitadoExtraService.update(+id, updateInvitadoExtraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitadoExtraService.remove(+id);
  }
}
