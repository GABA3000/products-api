import { Test, TestingModule } from '@nestjs/testing';
import { InvitadoExtraService } from './invitado-extra.service';

describe('InvitadoExtraService', () => {
  let service: InvitadoExtraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitadoExtraService],
    }).compile();

    service = module.get<InvitadoExtraService>(InvitadoExtraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
