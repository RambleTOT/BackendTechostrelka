import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDTO {
    @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
    readonly firstName: string
    @ApiProperty({example: 'Иванов', description: 'Фамилия пользователя'})
    readonly secondName: string
    @ApiProperty({example: '18', description: 'Возраст пользователя'})
    readonly age: number
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly password: string
    @ApiProperty({example: 'ivan@mail.com', description: 'Почта'})
    readonly email: string
    @ApiProperty({example: 1, description: 'Индекс роли'})
    readonly roleId: number
}