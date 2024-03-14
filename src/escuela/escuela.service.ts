import { Injectable } from '@nestjs/common';
import { IEscuela} from './escuela.interface';
import {EscuelaDTO} from './escuela.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class EscuelaService {
    escuela: IEscuela[] = [];
  todos() {
    return this.escuela;
  }
  uno(id: string) {
    return this.escuela.find((e) => e.id == id);
  }
  insertar(escuelas: EscuelaDTO) {
    const esc = {
      id: uuidv4(),
      ...escuelas,
    };

    this.escuela.push(esc);
    return this.escuela;
  }
  actualizar(id: string, escuelaActualizar: EscuelaDTO) {
    const nuevesc = { id, ...escuelaActualizar };
    this.escuela = this.escuela.map((escuela) =>
    escuela.id === id ? nuevesc : escuela,
    );
    return nuevesc;
  }
  eliminar(id: string) {
    this.escuela = this.escuela.filter((empleado) => empleado.id !== id);
    return 'escuela eliminada';
  }
}
