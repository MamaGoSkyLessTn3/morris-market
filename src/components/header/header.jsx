import React from 'react'
import SearchBar from './ui/search-bar'
import HeaderLauout from './ui/header-layout'
import { Button } from '../ui/button'
import ThemeButton from './ui/theme-switcher'
import { CartButton } from '../cart'
import { CartDrawer } from '../cart/cart-drawer'

function Header() {
	return (
		<>
			<HeaderLauout
				searchBar={<SearchBar />}
				themeButton={<ThemeButton />}
				signUpButton={
					<Button className='border border-emerald-600 rounded-3xl text-emerald-600 !important bg-background shadow-sm hover:bg-emerald-600 hover:text-white px-4 py-2 font-bold'>
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
