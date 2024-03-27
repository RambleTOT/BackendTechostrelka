import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/user/user.model';
import { LoginUserDTO } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    
    constructor(private userService: UserService,
                private jwtService: JwtService) {}

    async login(userDto: LoginUserDTO){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDTO){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException("Пользователь с такой почтой существует", HttpStatus.BAD_REQUEST)
        }
        console.log(userDto.password)
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: LoginUserDTO){
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        console.log(passwordEquals, userDto.email)
        if (user && passwordEquals){
            return user
        }
        throw new UnauthorizedException({message: "Неверная почта или пароль"})
    }

}



