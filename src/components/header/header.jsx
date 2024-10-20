import React from 'react'
import SearchBar from './ui/search-bar'
import HeaderLauout from './ui/header-layout'
import { Button } from '../ui/button'
import ThemeButton from './ui/theme-switcher'
import { CartButton } from '../cart'
import { CartDrawer } from '../cart/cart-drawer'
import { User } from 'lucide-react'

function Header({ className, hasSearch, hasCart }) {
	return (
		<>
			<HeaderLauout
				hasCart={hasCart}
				hasSearch={hasSearch}
				className={className}
				searchBar={<SearchBar />}
				themeButton={<ThemeButton />}
				signUpButton={
					<Button className='flex gap-1 justify-center align-middle items-center border bg-transparent border-emerald-600 rounded-3xl text-emerald-600 !important  shadow-sm hover:bg-emerald-600 hover:text-white px-4 py-2 font-bold'>
						<User width={16} className='' />
						Войти
					</Button>
				}
				cartDrawer={
					<CartDrawer>
						<CartButton />
					</CartDrawer>
				}
			/>
		</>
	)
}

export default Header
