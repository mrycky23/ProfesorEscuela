import mongoose from "mongoose";

export const ProfesorSchema = new mongoose.Schema(
  {
    nombres: { type: String, required: true },
    asignatura: { type: String, required: true },
    horario: { type: String, required: true },
    anio_ingreso: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

