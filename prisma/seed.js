const {
	userData,
	categoryData,
	recipeData,
	recipeProcessData,
	productsInRecipeData,
	productData,
} = require('./data.js')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// Функция для генерации случайных чисел
const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}

async function up() {
	await prisma.user.createMany({
		data: userData,
	})
	await prisma.category.createMany({
		data: categoryData,
	})
	console.log('Создание Обьектов...')
	await prisma.recipe.createMany({
		data: recipeData,
	})
	await prisma.product.createMany({
		data: productData,
	})
	await prisma.recipeProcess.createMany({
		data: recipeProcessData,
	})
	await prisma.productsInRecipe.createMany({
		data: productsInRecipeData,
	})
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '1111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '22222',
			},
		],
	})
	await prisma.cartItem.createMany({
		data: [
			{
				productId: 1,
				cartId: 1,
				userId: 1,
				quantity: 1,
			},
			{
				productId: 40,
				cartId: 1,
				userId: 1,
				quantity: 4,
			},
		],
	})
}

console.log('Созданы!...')

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Recipe" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "RecipeProcess" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductsInRecipe" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
