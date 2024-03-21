import { HttpStatus, Injectable } from '@nestjs/common';
import { IProfesor } from './profesor.interface';
import { v4 as uuidv4 } from 'uuid';
import { ProfesorDTO } from './profesor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PROFESOR } from 'src/models/models';
import { Model } from 'mongoose';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectModel(PROFESOR.name) private readonly model: Model<IProfesor>,
  ) {}
  insertar(profesorDTO: ProfesorDTO): Promise<IProfesor> {
    const nuevoProfesor = new this.model(profesorDTO);
    return nuevoProfesor.save();
  }
  todos(): Promise<IProfesor[]> {
    return this.model.find().populate('escuela');
  }
  uno(id: string): Promise<IProfesor> {
    return this.model.findById(id).populate('escuela');
  }
  actualizar(id: string, profesorDTO: ProfesorDTO): Promise<IProfesor> {
    return this.model.findByIdAndUpdate(id, profesorDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Profesor eliminado' };
  }
  async insertarEscuela(
    idProfesor: string,
    idEscuela: string,
  ): Promise<IProfesor> {
    return await this.model.findByIdAndUpdate(
      idProfesor,
      { $addToSet: { escuela: idEscuela } },
      { new: true },
    )
    .populate('escuela');
  }
}
