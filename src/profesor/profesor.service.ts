import { Injectable } from '@nestjs/common';
import { IProfesor } from './profesor.interface';
import { v4 as uuidv4 } from 'uuid';
import { ProfesorDTO } from './profesor.dto';

@Injectable()
export class ProfesorService {
  profesores: IProfesor[] = [];
  todos() {
    return this.profesores;
  }
  uno(id: string) {
    return this.profesores.find((e) => e.id == id);
  }
  insertar(profesor: ProfesorDTO) {
    const prof = {
      id: uuidv4(),
      ...profesor,
    };

    this.profesores.push(prof);
    return this.profesores;
  }
  actualizar(id: string, profesorActualizar: ProfesorDTO) {
    const nuevoprof = { id, ...profesorActualizar };
    this.profesores = this.profesores.map((profesor) =>
    profesor.id === id ? nuevoprof : profesor,
    );
    return nuevoprof;
  }
  eliminar(id: string) {
    this.profesores = this.profesores.filter((profesor) => profesor.id !== id);
    return 'profesor eliminado';
  }
}

