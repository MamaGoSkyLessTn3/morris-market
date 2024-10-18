import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Title from '../ui/title'
import { X } from 'lucide-react'
import CartItem from './cart-item'
import { products } from '../../../prisma/data'

function Cart({ isOpen, setIsOpen, totalAmount = 332 }) {
	const cartVariants = {
		open: {
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 30,
			},
		},
		closed: {
			x: '200%',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 30,
			},
		},
	}

	return (
		<motion.div
			className='fixed z-50 top-0 right-0 h-full md:h-[98%] flex flex-col bg-background md:w-[350px] w-full md:rounded-3xl shadow-lg p-4 md:m-2'
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={cartVariants}
		>
			<div className='grid grid-rows-[auto_1fr_auto] h-full'>
				<div className='relative'>
					<Title
						size='large'
						color='black'
						className='p-2 flex text-foreground justify-center items-center align-middle mr-5 md:mr-0 md:justify-start'
					>
						Корзина
					</Title>
					<div onClick={() => setIsOpen(false)} className='h-1'>
						<X
							size={30}
							className='absolute top-3 right-5 cursor-pointer hover:text-emerald-400 transition-colors'
						/>
					</div>
				</div>

				<div className='overflow-y-auto custom-scrollbar'>
					{products && products.length > 0 ? (
						products.map(product => (
							<CartItem className='my-2' key={product.id} {...product} />
						))
					) : (
						<p>Здесь будет содержимое корзины</p>
					)}
				</div>

				<div className='flex mt-4 items-center align-middle flex-row justify-between'>
					<div className='flex flex-col justify-start'>
						<p className='text-sm'>Итого</p>
						<h1 className='font-bold text-xl'>{totalAmount} ₽</h1>
					</div>
					<Button className=''>К оплате</Button>
				</div>
			</div>
		</motion.div>
	)
}

export default Cart
