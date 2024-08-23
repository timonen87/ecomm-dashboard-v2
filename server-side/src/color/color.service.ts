import { Injectable, NotFoundException } from '@nestjs/common';
import { dbClient } from 'src/prisma.service';
import { ColorDto } from './dto/color.dto';

@Injectable()
export class ColorService {
    constructor(private db: dbClient) {}

	async getByStoreId(storeId: string) {
		return this.db.color.findMany({
			where: {
				storeId
			}
		})
	}

	async getById(id: string) {
		const color = await this.db.color.findUnique({
			where: {
				id
			}
		})

		if (!color) throw new NotFoundException('Цвет не найден')

		return color
	}

	async create(storeId: string, dto: ColorDto) {
		return this.db.color.create({
			data: {
				name: dto.name,
				value: dto.value,
				storeId
			}
		})
	}

	async update(id: string, dto: ColorDto) {
		await this.getById(id)

		return this.db.color.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.db.color.delete({
			where: { id }
		})
	}
}
