import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EscuelaSchema } from './schema/escuela.schema';
import { ESCUELA } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ESCUELA.name,
        useFactory: () => EscuelaSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  providers: [EscuelaService],
  controllers: [EscuelaController],
  exports: [EscuelaService],
})
export class EscuelaModule {}
