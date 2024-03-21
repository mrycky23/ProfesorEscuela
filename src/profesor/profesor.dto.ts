import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProfesorDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  nombres: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  asignatura: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  horario: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  anio_ingreso: number;
}
