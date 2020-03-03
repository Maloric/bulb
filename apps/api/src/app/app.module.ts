import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as noble from '@abandonware/noble';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'NOBLE',
      useValue: noble
    }
  ]
})
export class AppModule {}
