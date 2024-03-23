import { Controller, Post, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  postHello(
    @Req() req: any,
    @Res() res: any
  ) {
    console.log(req.query)
    return res.status(200).send(req.query)
  }

  @Get('/')
  getHello(
    @Req() req: any,
    @Res() res: any
  ) {
    console.log(req.query)
    return res.status(200).send(req.query)
  }

}
