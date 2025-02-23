import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitadoExtraController } from './invitado-extra.controller';
import { InvitadoExtraService } from './invitado-extra.service';
import { InvitadoExtra } from './entities/invitado-extra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvitadoExtra])],
  controllers: [InvitadoExtraController],
  providers: [InvitadoExtraService],
  exports: [InvitadoExtraService],
})
export class InvitadoExtraModule {}