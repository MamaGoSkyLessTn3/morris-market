'use client'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from 'zustand'
import AdditionalProdutsModal from './additional-products-modal'
import ProductInfoModal from './product-info-modal'
import ImageModal from './image-modal'
import AddModalButton from './add-modal-button'
import { useCartStore } from '@/store/cart'
import toast from 'react-hot-toast'
import { shallow } from 'zustand/shallow'

function ChooseProductModal({ product, additionalProducts = [] }) {
	const router = useRouter()

	const addCartItem = useCartStore(state => state.addCartItem)
	const loading = useStore(useCartStore, state => state.loading, shallow)

	const onAddProduct = async productId => {
		try {
			await addCartItem(productId)
			if (!loading) {
				toast.success(`${product.name} добавлен в корзину`)
				router.back()
			}
		} catch (error) {
			toast.error(`Произошла ошибка при добавлении ${product.name}  в корзину`)
			console.log(error)
		}
	}

	return (
		<Dialog
			open={Boolean(product)}
			className='w-full h-full'
			onOpenChange={() => router.back()}
		>
			<DialogContent className=' rounded-3xl w-full h-[80%] bg-background overflow-hidden flex flex-row p-4'>
				<DialogTitle className='hidden'>{product.name}</DialogTitle>
				<div className='w-1/2 flex flex-col items-center justify-start overflow-y-scroll custom-scrollbar h-full'>
					<ImageModal product={product} />
					<AdditionalProdutsModal additionalProducts={additionalProducts} />
				</div>
				<div className='w-1/2 flex flex-col justify-between '>
					<ProductInfoModal product={product} />
					<AddModalButton
						loading={loading}
						product={product}
						onSubmit={() => onAddProduct(product.id)}
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ChooseProductModal
