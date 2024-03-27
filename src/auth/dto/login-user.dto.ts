import { ApiProperty } from "@nestjs/swagger"

export class LoginUserDTO {
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly password: string
    @ApiProperty({example: 'ivan@mail.com', description: 'Почта'})
    readonly email: string
}