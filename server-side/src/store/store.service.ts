import { Injectable, NotFoundException } from '@nestjs/common'
import { dbClient } from 'src/prisma.service'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'

@Injectable()
export class StoreService {
	constructor(private db: dbClient) {}

	async getById(storeId: string, userId: string) {
		const store = await this.db.store.findUnique({
			where: {
				id: storeId
			}
		})

		if (!store) throw new NotFoundException('Магазин не найден')

		return store
	}

    async create(userId: string, dto: CreateStoreDto) {
        return this.db.store.create({
            data: {
                title: dto.title,
                userId
            }
        })
    }

    async update(storeId: string, userId: string, dto: UpdateStoreDto) {
        await this.getById(storeId, userId)
        return this.db.store.update({
            where: {
                id: storeId
            },
            data: {
                ...dto,
                userId
            }
        })
    }

    async delete(storeId:string, userId: string) {
        await this.getById(storeId, userId)

        return this.db.store.delete({
            where: {
                id: storeId
            }
        })
    }


}
