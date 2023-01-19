import mongoose from 'mongoose';
import { config } from '../config/config.js';

//handle incorrect routes
export function notFound(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

export function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

export function odmErrorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.ValidationError) {
    // manejar error de validación
    res.status(400).json({
      statusCode: 400,
      message: err.message,
    });
  } else if (err.code === 11000) {
    // manejar error de clave duplicada
    res.status(409).send('Valor duplicado');
  }
  next(err);
}

export function errorHandler(err, req, res) {
  // console.log(err.kind);
  res.status(500).json({
    message: err.message,
    stack: config.isProd ? null : err.stack,
  });
}
