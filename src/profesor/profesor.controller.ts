import { Body, Controller, Delete, Get, Param, Post, Put,UsePipes, ValidationPipe } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './profesor.dto';

@Controller('profesor')
export class ProfesorController {
    constructor(private empleadosServicio:EmpleadosService){}

    @Get()
    todos(){
        return this.empleadosServicio.todos();
    }

    @Get(":id")
    uno(@Param('id') id:string){
        return this.empleadosServicio.uno(id);
    }

    @Post()
    insertar(@Body() empleado: EmpleadoDTO){
        return this.empleadosServicio.insertar(empleado);
    }

    @Put(":id")
    actualizar(@Param('id') id:string, @Body() empleado:EmpleadoDTO){
        return this.empleadosServicio.actualizar(id, empleado);
    }

    @Delete(":id")
    eliminar(@Param('id') id: string){
        return this.empleadosServicio.eliminar(id);
    }
}
