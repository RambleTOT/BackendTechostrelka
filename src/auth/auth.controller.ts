import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login-user.dto';

@ApiTags("Авторизация")
@Controller('/api/auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: LoginUserDTO){
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDTO){
        return this.authService.registration(userDto)
    }

}
