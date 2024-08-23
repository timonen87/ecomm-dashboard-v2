import { Injectable, NotFoundException } from '@nestjs/common';
import { dbClient } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
    constructor(
		private db: dbClient,
		private productService: ProductService
	) {}

	async getByStoreId(storeId: string) {
		return this.db.review.findMany({
			where: {
				storeId
			},
			include: {
				user: true
			}
		})
	}

	async getById(id: string, userId: string) {
		const review = await this.db.review.findUnique({
			where: {
				id,
				userId
			},
			include: {
				user: true
			}
		})

		if (!review)
			throw new NotFoundException(
				'Отзыв не найден или вы не являетесь его владельцем'
			)

		return review
	}

	async create(
		userId: string,
		productId: string,
		storeId: string,
		dto: ReviewDto
	) {
		await this.productService.getById(productId)

		return this.db.review.create({
			data: {
				...dto,
				product: {
					connect: {
						id: productId
					}
				},
				user: {
					connect: {
						id: userId
					}
				},
				store: {
					connect: {
						id: storeId
					}
				}
			}
		})
	}

	async delete(id: string, userId: string) {
		await this.getById(id, userId)

		return this.db.review.delete({
			where: {
				id
			}
		})
	}
}
