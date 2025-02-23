import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InvitadoExtra } from '../../invitado-extra/entities/invitado-extra.entity';

@Entity()
export class Invitado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  numero_telefono: string;

  @Column()
  num_personas: number;

  @OneToMany(() => InvitadoExtra, (invitadoExtra) => invitadoExtra.invitado)
  invitadosExtras: InvitadoExtra[];
}