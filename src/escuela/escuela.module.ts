import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';

@Module({
  providers: [EscuelaService],
  controllers: [EscuelaController]
})
export class EscuelaModule {}
