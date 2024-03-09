import { Injectable } from '@nestjs/common';

import * as cloudinary from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';

cloudinary.v2.config({
  cloud_name: 'dx415kqzk',
  api_key: '528553568553993',
  api_secret: 'qEqpK12wZJlrQTLMCxefUkQUAfA'
});

@Injectable()
export class ImgManagerService {
  constructor() {}

  public async imgUpload(file) {
    try {
      if (!file) {
        throw new Error('No se proporcionó ningún archivo.');
      }
      // Obtener la ruta del directorio temporal
      const tmpDir = path.join(__dirname, '..', 'tmp');
      // Verificar si el directorio temporal existe, si no, crearlo
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
      }
      // Escribir el búfer del archivo en un archivo temporal
      const filePath = path.join(tmpDir, file.originalname);
      fs.writeFileSync(filePath, file.buffer);
      // Subir el archivo a Cloudinary
      const cloudinaryResponse = await cloudinary.v2.uploader.upload(filePath, {
        public_id: file.originalname.split('.').slice(0, -1).join('.')
      });
      console.log(cloudinaryResponse);
      // Eliminar el archivo temporal después de subirlo
      fs.unlinkSync(filePath);
      return cloudinaryResponse.secure_url;
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error);
      throw error; // Manejar el error según la lógica de tu aplicación
    }
  }

  findAll() {
    return `This action returns all imgManager`;
  }

  findOne(id: string) {
    return `This action returns a #${id} imgManager`;
  }

  update(id: string, prueba: string) {
    return `This action updates a #${id} imgManager ${prueba}`;
  }

  remove(id: string) {
    return `This action removes a #${id} imgManager`;
  }
}
