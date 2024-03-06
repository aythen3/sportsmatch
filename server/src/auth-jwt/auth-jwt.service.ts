import { HttpException, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtPayload, sign } from 'jsonwebtoken';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthJwtService {
  /**
   * Firma un JWT con el payload, secreto y tiempo de expiración proporcionados.
   * @param payload - El payload del JWT.
   * @param secret - El secreto para firmar el JWT.
   * @param expires - El tiempo de expiración del JWT.
   * @returns El JWT firmado como string.
   */
  public signJWT({
    payload,
    secret,
    expires
  }: {
    payload: JwtPayload;
    secret: string;
    expires: number | string;
  }): string {
    // Firma el JWT con el payload, secreto y tiempo de expiración proporcionados
    return sign(payload, secret, { expiresIn: expires });
  }

  /**
   * Valida el inicio de sesión comparando la contraseña proporcionada con la almacenada.
   * @param user - El usuario a validar.
   * @param password - La contraseña proporcionada.
   * @returns Una promesa que resuelve al resultado del inicio de sesión.
   */
  public async loginValidate(user: UserEntity, password: string) {
    // Comprueba si la contraseña es correcta
    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new HttpException('La contraseña es inválida', 400);
    } else {
      // Si la contraseña es correcta, inicia sesión

      return await this.login(user);
    }
  }

  /**
   * Verifica la contraseña proporcionada con la almacenada en el usuario.
   * @param user - El usuario cuya contraseña se verificará.
   * @param password - La contraseña proporcionada.
   * @returns Una promesa que resuelve a true si la contraseña es correcta, de lo contrario false.
   */
  public async verifyPassword(user: UserEntity, password: string) {
    try {
      // Comprueba si la contraseña es correcta
      const checkPassword = await compare(password, user.password);

      if (!checkPassword) {
        throw new HttpException('La contraseña es inválida', 400);
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Inicia sesión firmando un JWT con el ID del usuario y el secreto proporcionado.
   * @param user - El usuario que iniciará sesión.
   * @returns Una promesa que resuelve al token de acceso y la información del usuario.
   */
  public async login(user: UserEntity) {
    try {
      if (user.isDelete) throw new HttpException('El usuario no existe', 404);
      return {
        accesToken: this.signJWT({
          payload: { id: user.id },
          secret: process.env.JWT_SECRET,
          expires: '7d'
        }),
        user
      };
    } catch (error) {
      throw new HttpException('error en login', 501);
    }
  }
}
