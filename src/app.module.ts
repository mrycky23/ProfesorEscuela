import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscuelaModule } from './escuela/escuela.module';
import { ProfesorModule } from './profesor/profesor.module';

@Module({
  imports: [EscuelaModule, ProfesorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
