import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaDTO} from './escuela.dto';

@Controller('escuela')
export class EscuelaController {
    
    constructor(private escuelasServicio:EscuelaService){}

    @Get()
    todos(){
        return this.escuelasServicio.todos();
    }

    @Get(":id")
    uno(@Param('id') id:string){
        return this.escuelasServicio.uno(id);
    }

    @Post()
    insertar(@Body() escuela: EscuelaDTO){
        return this.escuelasServicio.insertar(escuela);
    }

    @Put(":id")
    actualizar(@Param('id') id:string, @Body() escuela:EscuelaDTO){
        return this.escuelasServicio.actualizar(id, escuela);
    }

    @Delete(":id")
    eliminar(@Param('id') id: string){
        return this.escuelasServicio.eliminar(id);
    }
}
