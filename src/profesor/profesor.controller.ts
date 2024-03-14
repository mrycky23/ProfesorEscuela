import { Body, Controller, Delete, Get, Param, Post, Put,UsePipes, ValidationPipe } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './profesor.dto';

@Controller('profesor')
export class ProfesorController {
    constructor(private profesorServicio:ProfesorService){}

    @Get()
    todos(){
        return this.profesorServicio.todos();
    }

    @Get(":id")
    uno(@Param('id') id:string){
        return this.profesorServicio.uno(id);
    }

    @Post()
    insertar(@Body() profesor: ProfesorDTO){
        return this.profesorServicio.insertar(profesor);
    }

    @Put(":id")
    actualizar(@Param('id') id:string, @Body() profesor:ProfesorDTO){
        return this.profesorServicio.actualizar(id, profesor);
    }

    @Delete(":id")
    eliminar(@Param('id') id: string){
        return this.profesorServicio.eliminar(id);
    }
}
