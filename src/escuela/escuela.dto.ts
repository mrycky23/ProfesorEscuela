import {IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EscuelaDTO {
  //@IsNotEmpty({ message: 'El campo es requerido' })
  //@IsString({ message: 'Se necesita un texto' })
  //id: string;
  @IsNotEmpty({message:"El campo es requerido"})
  @IsString({message:"Se necesita un texto"})
  nombre: string;
  @IsNotEmpty({message:"El campo es requerido"})
  @IsString({message:"Se necesita un texto"})
  direccion: string;
  @IsNotEmpty({message:"El campo es requerido"})
  @IsNumber({})
  telefono: number;
  @IsNotEmpty({message:"El campo es requerido"})
  @IsNumber()
  numero_estudiantes: number;
}
