import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) {}

    async createUser(dto: CreateUserDTO) {
        const role = await this.roleService.getRoleByValue("USER")
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

}
