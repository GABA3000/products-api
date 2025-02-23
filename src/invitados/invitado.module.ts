import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitadosController } from './invitado.controller';
import { InvitadosService } from './invitado.service';
import { Invitado } from './entities/invitado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invitado])],
  controllers: [InvitadosController],
  providers: [InvitadosService],
  exports: [InvitadosService],
})
export class InvitadosModule {}