import { Injectable, NotFoundException } from '@nestjs/common'
import { dbClient } from 'src/prisma.service'
import { CategoryDto } from './dto/category.dto'

@Injectable()
export class CategoryService {
	constructor(private db: dbClient) {}

	async getByStoreId(storeId: string) {
		return this.db.category.findMany({
			where: {
				storeId
			}
		})
	}

	async getById(id: string) {
		const category = await this.db.category.findUnique({
			where: {
				id
			}
		})

		if (!category) throw new NotFoundException('Категория не найдена')

		return category
	}

	async create(storeId: string, dto: CategoryDto) {
		return this.db.category.create({
			data: {
				title: dto.title,
				description: dto.description,
				storeId
			}
		})
	}

	async update(id: string, dto: CategoryDto) {
		await this.getById(id)

		return this.db.category.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.db.category.delete({
			where: { id }
		})
	}
}
