import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { join } from 'path';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { ResetCodeEntity } from './entities/reset-code.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable() // Marca la clase como un proveedor de servicios que puede ser inyectado
export class ResetCodeService {
  constructor(
    private readonly mailerService: MailerService, // Inyecta el servicio MailerService
    @InjectRepository(ResetCodeEntity)
    private readonly resetCodeRepository: Repository<ResetCodeEntity>, // Inyecta el repositorio de ResetCodeEntity
    private readonly usersService: UserService // Inyecta el servicio UserService
  ) {}

  /**
   * Envía un correo electrónico con el código de restablecimiento de contraseña.
   * @param email La dirección de correo electrónico a la que enviar el código.
   * @returns Una promesa que resuelve un mensaje de éxito.
   */
  async sendResetCodeEmail(email: string) {
    console.log('email', email); // Imprime el email al que se enviará el código

    const resetCodeOld = await this.resetCodeRepository.findOne({
      where: {
        email: email
      }
    });
    if (resetCodeOld) {
      await this.resetCodeRepository.remove(resetCodeOld);
    }
    // Define las rutas a los recursos gráficos
    /*  const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'assets',
      'spotsport.png'
    ); */
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'assets',
      'icons',
      'facebook_icon.png'
    );
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'assets',
      'icons',
      'twitter_icon.png'
    );
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'assets',
      'icons',
      'instagram_icon.png'
    );
    // Genera un código de restablecimiento de contraseña aleatorio
    const resetCode = Math.floor(1000 + Math.random() * 9000).toString();

    // Guarda el código generado en la base de datos
    await this.resetCodeRepository.save({
      code: resetCode,
      email: email,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // Establece la fecha de expiración del código
    });

    // Define la plantilla HTML del correo electrónico
    const htmlTemplate = `
    <html>
    <head>
      <style>
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: full;
          margin: 0;      
        }
        #container {
          text-align: center;
          padding: 20px;
          background-color: #fcece7;
        }
        img {
          width: 40%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        p {
          color: #642794;
          text-align: center;,       
        }
        .title {
          font-size: 2em;
          font-weight: bold;
        }
        .social {
          font-weight: 600;
          font-size: 1.5em;
        }
        .icons {
          display: flex;
          flex-direction: row;
          width: 40%;
          justify-content: center;
          align-items: center;
          margin-left: 30%;
        }
        .iconImg {
          width: 40px;
        }
      </style>
    </head>
    <body>
    <div id="container">
    <img src="cid:sportSpot" />
        <p class='title'>Tu código de restablecimiento de contraseña es: <b>${resetCode}</b></p>
        <p>Ya estás listo para comenzar a participar en los mejores eventos deportivos en el área que desees</p>
          <p class='social'>¡Síguenos en nuestras redes!</p>
          <div class='icons'>
            <img src="cid:facebookIcon" class='iconImg'/>
            <img src="cid:twitterIcon" class='iconImg'/>
            <img src="cid:instagramIcon" class='iconImg'/>
          </div>
      </div>
    </body>
    </html>
    `;

    // Envía el correo electrónico con el código de restablecimiento
    await this.mailerService.sendMail({
      to: email,
      subject: 'Código de restablecimiento de contraseña',
      html: htmlTemplate, // Usa la plantilla HTML definida anteriormente
      context: {}, // No se pasa ningún contexto adicional
      attachments: [
        // Adjunta los recursos gráficos
        /* {
          filename: 'sportspot.png',
          path: sportspotLogo,
          cid: 'sportSpot'
        }, */
        {
          filename: 'facebook_icon.png',
          path: facebookIcon,
          cid: 'facebookIcon'
        },
        { filename: 'twitter_icon.png', path: twitterIcon, cid: 'twitterIcon' },
        {
          filename: 'instagram_icon.png',
          path: instagramIcon,
          cid: 'instagramIcon'
        }
      ]
    });

    return `Correo enviado exitosamente code: ${resetCode}`; // Devuelve un mensaje de éxito
  }

  /**
   * Valida el código de restablecimiento de contraseña.
   * @param code El código de restablecimiento.
   * @param email La dirección de correo electrónico asociada al código.
   * @param password La nueva contraseña a establecer.
   * @returns Una promesa que resuelve un mensaje de éxito o lanza una excepción si el código no es válido.
   */
  async validateResetCode(code: string, email: string, password: string) {
    // Busca el código de restablecimiento en la base de datos
    const resetCode = await this.resetCodeRepository.findOne({
      where: {
        code: code,
        email: email,
        expiresAt: MoreThanOrEqual(new Date()) // Asegura que el código no haya expirado
      }
    });

    // Obtiene el usuario asociado al correo electrónico
    const user = await this.usersService.getByEmail(email);

    if (resetCode) {
      // Si el código es válido, actualiza la contraseña del usuario
      const updateUserDto: UpdateUserDto = { password };
      await this.usersService.update(user.id, updateUserDto);
    } else {
      // Si el código no es válido, lanza una excepción
      throw new BadRequestException(
        'El código de restablecimiento de contraseña no es válido'
      );
    }
    // Elimina el código de restablecimiento de la base de datos
    await this.resetCodeRepository.remove(resetCode);

    return 'Código de restablecimiento de contraseña válido'; // Devuelve un mensaje de éxito
  }
}
