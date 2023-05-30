import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor( private configService: ConfigService<any>){
    console.log('>>>', this.configService.get('FOO'));
    console.log('>>>', this.configService.get('BAR'));
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
