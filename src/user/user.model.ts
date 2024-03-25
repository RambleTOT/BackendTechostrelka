import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    firstName: string
    secondName: string
    age: number
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный индефикатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number; 

    @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    firstName: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    secondName: string;

    @ApiProperty({example: '18', description: 'Возраст пользователя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    age: number;

    @ApiProperty({example: 'ivan@mail.com', description: 'Почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

}