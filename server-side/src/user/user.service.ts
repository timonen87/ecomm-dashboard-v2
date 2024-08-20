import { Injectable } from '@nestjs/common'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { dbClient } from 'src/prisma.service'
import { hash } from 'argon2'

@Injectable()
export class UserService {
	constructor(private readonly db: dbClient) {}

	async getById(id: string) {
		const {password, ...user} = await this.db.user.findUnique({
			where: {
				id
			},
            include: {
                stores: true,
                favorites: {
                    include: {
                        category: true
                    }
                },
                orders: true,
            }
		})

		return user
	}

    async toggleFavorite(productId: string, userId: string) {
        const user = await this.getById(userId)
        const isExists = user.favorites.some(
            product => product.id === productId
        )

        await this.db.user.update({
            where: {
                id: user.id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect': 'connect']: {
                        id: productId
                    }
                }
            }
        })
        return true
    }

	async getByEmail(email: string) {
		const user = await this.db.user.findUnique({
			where: {
				email
			},
            include: {
                stores: true,
                favorites: true,
            }
		})

		return user
	}

	async create(dto: AuthDto) {
		return this.db.user.create({
			data: {
				name: dto.name,
				email: dto.email,
				password: await hash(dto.password)
			}
		})
	}
}
