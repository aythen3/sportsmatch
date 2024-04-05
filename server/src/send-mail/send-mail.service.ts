import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SendMailService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly mailerService: MailerService
  ) {}

  async sendRegistrationNotification(email: string) {
    /* const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      '..',
      'client',
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
    const htmlTemplate = `
    <html>
    <head>
      <style>
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 150vh;
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
        <p class='title'>¡Gracias por registrarte!</p>
        <p>Ya estás listo para entrar al mundo de Sportmatch, bienvenido!!</p>
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
    await this.mailerService.sendMail({
      to: email,
      subject: 'Registro exitoso',
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      context: {}, // Datos adicionales que pueden ser pasados a la plantilla
      attachments: [
        /* {
          filename: 'sportspot.png',
          path: sportspotLogo,
          cid: 'sportSpot'a
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

    return 'Correo enviado exitosamente';
  }
}
