import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitadosModule } from './invitados/invitado.module';
import { InvitadoExtraModule } from './invitado-extra/invitado-extra.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1605',
      database: 'xv_invitaciones',
      autoLoadEntities: true,
      synchronize: true,
    }),
    InvitadosModule,
    InvitadoExtraModule,
  ],
})
export class AppModule {}