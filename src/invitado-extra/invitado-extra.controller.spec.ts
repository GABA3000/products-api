import { Test, TestingModule } from '@nestjs/testing';
import { InvitadoExtraController } from './invitado-extra.controller';

describe('InvitadoExtraController', () => {
  let controller: InvitadoExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitadoExtraController],
    }).compile();

    controller = module.get<InvitadoExtraController>(InvitadoExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
