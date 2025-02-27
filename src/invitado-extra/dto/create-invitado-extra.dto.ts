import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateInvitadoExtraDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsInt()
  invitadoId: number;
}
