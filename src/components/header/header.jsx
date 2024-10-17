'use client'
import React, { useState } from 'react'
import SearchBar from './ui/searchbar'
import HeaderLauout from './ui/header-layout'
import { Button } from '../ui/button'
import ThemeButton from './ui/theme-switcher'
import RegistrModal from './ui/registr-modal'
import { Cart, CartButton } from '../cart'

function Header() {
	const [isOpenModal, setIsOpenModal] = useState()
	const [isOpenCart, setIsOpenCart] = useState(false)

	return (
		<>
			<HeaderLauout
				searchBar={<SearchBar />}
				themeButton={<ThemeButton />}
				signUpButton={
					<Button
						size='lg'
						onClick={() => {
							setIsOpenModal(true)
						}}
					>
						Войти
					</Button>
				}
				cartButton={<CartButton onClick={() => setIsOpenCart(true)} />}
			/>
			<RegistrModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
			<Cart isOpen={isOpenCart} setIsOpen={setIsOpenCart} />
		</>
	)
}

export default Header
