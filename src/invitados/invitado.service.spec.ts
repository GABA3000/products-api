import { Test, TestingModule } from '@nestjs/testing';
import { InvitadosService } from './invitado.service';

describe('InvitadoService', () => {
  let service: InvitadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitadosService],
    }).compile();

    service = module.get<InvitadosService>(InvitadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
