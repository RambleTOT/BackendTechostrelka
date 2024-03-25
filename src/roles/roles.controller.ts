import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRoleDTO } from './dto/create-role.dto';
import { Role } from './roles.model';

@Controller('api/roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: "Создание роли"})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDTO){
        return this.roleService.createRole(dto)
    }

    @ApiOperation({summary: "Получить определенную роль"})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }

}
