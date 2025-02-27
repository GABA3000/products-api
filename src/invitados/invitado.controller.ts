import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { InvitadosService } from './invitado.service';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';

@Controller('invitados')
export class InvitadosController {
  constructor(private readonly invitadosService: InvitadosService) {}

  @Post()
  create(@Body() createInvitadoDto: CreateInvitadoDto) {
    return this.invitadosService.create(createInvitadoDto);
  }

  @Get()
  findAll() {
    return this.invitadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitadosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateInvitadoDto) {
    return this.invitadosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitadosService.remove(+id);
  }
}