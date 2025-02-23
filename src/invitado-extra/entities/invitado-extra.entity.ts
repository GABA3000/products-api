import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Invitado } from '../../invitados/entities/invitado.entity';

@Entity()
export class InvitadoExtra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Invitado, (invitado) => invitado.invitadosExtras, { onDelete: 'CASCADE' })
  invitado: Invitado;
}