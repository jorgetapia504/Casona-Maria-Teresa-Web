import mongoose, { Schema, models, model } from "mongoose";

const CotizacionSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
    },
    typeEvent: {
      type: String,
      required: true,
    },
    dateEvent: {
      type: Date,
    },
    quantity: {
      type: Number,
    },
    message: {
      type: String,
    },
    state: {
      type: String,
      enum: ["pendiente", "contactado", "cerrado", "rechazado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Cotizacion || model("Cotizacion", CotizacionSchema);