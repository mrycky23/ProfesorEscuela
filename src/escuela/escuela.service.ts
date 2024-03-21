import { HttpStatus, Injectable } from '@nestjs/common';
import { IEscuela } from './escuela.interface';
import { EscuelaDTO } from './escuela.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { ESCUELA } from 'src/models/models';
import { Model } from 'mongoose';

@Injectable()
export class EscuelaService {
  constructor(
    @InjectModel(ESCUELA.name) private readonly modelo: Model<IEscuela>,
  ) {}
  insertar(escuelaDTO: EscuelaDTO): Promise<IEscuela> {
    const nuevaEscuela = new this.modelo(escuelaDTO);
    return nuevaEscuela.save();
  }
  todos(): Promise<IEscuela[]> {
    return this.modelo.find().populate('profesores');
  }
  uno(id: string): Promise<IEscuela> {
    return this.modelo.findById(id).populate('profesores');
  }
  actualizar(id: string, escuelaDTO: EscuelaDTO): Promise<IEscuela> {
    return this.modelo.findByIdAndUpdate(id, escuelaDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.modelo.findById(id);
    return { status: HttpStatus, msg: 'Escuelas eliminadas' };
  }
  async insertarProfesor(
    idEscuela: string,
    idProfesor: string,
  ): Promise<IEscuela> {
    return await this.modelo.findByIdAndUpdate(
      idEscuela,
      { $addToSet: { profesores: idProfesor } },
      { new: true },
    )
    .populate('profesor');
  }
}
