import { Test, TestingModule } from '@nestjs/testing';
import { InvitadoController } from './invitado.controller';

describe('InvitadoController', () => {
  let controller: InvitadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitadoController],
    }).compile();

    controller = module.get<InvitadoController>(InvitadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
