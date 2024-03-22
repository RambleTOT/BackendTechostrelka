import { Controller, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getHello(
    @Req() req: any,
    @Res() res: any
  ) {
    console.log(req.query)
    return res.status(200).send(req.query)
  }
}
