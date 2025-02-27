import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
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

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateInvitadoExtraDto
  ) {
    return this.invitadoExtraService.update(id, data);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitadoExtraService.remove(+id);
  }



  
}
