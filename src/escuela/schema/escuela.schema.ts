import mongoose from "mongoose";

export const EscuelaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: Number, required: true},
    numero_estudiantes: {type: Number, required: true},
},{
    timestamps: true,
});

EscuelaSchema.index({nombre: 1}, {unique: true})
EscuelaSchema.index({telefono: 1}, {unique: true})