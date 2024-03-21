import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { PROFESOR } from 'src/models/models';
import { ProfesorSchema } from './schema/profesor.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EscuelaModule } from 'src/escuela/escuela.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROFESOR.name,
        useFactory: () => ProfesorSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    EscuelaModule,
  ],
  providers: [ProfesorService],
  controllers: [ProfesorController]
})
export class ProfesorModule {}
