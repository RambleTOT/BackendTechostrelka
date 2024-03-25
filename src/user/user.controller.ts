import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Пользователи')
@Controller('api/user')
export class UserController {

    constructor(private userService: UserService) {}

    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDTO){
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: "Получить всех пользоватлей"})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

}
