import { Test, TestingModule } from '@nestjs/testing';
import { SpeechController } from './speak.controller';
import { SpeechService } from './speak.service';

describe('SpeechController', () => {
  let controller: SpeechController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeechController],
      providers: [SpeechService],
    }).compile();

    controller = module.get<SpeechController>(SpeechController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
