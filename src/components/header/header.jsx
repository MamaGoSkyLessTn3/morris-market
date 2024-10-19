import React from 'react'
import SearchBar from './ui/search-bar'
import HeaderLauout from './ui/header-layout'
import { Button } from '../ui/button'
import ThemeButton from './ui/theme-switcher'
import { Cart, CartButton } from '../cart'

function Header() {
	return (
		<>
			<HeaderLauout
				searchBar={<SearchBar />}
				themeButton={<ThemeButton />}
				signUpButton={<Button size='lg'>Войти</Button>}
			/>
		</>
	)
}

export default Header
