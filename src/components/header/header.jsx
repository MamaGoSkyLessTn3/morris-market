'use client'
import React, { useState } from 'react'
import SearchBar from './ui/search-bar'
import HeaderLauout from './ui/header-layout'
import { Button } from '../ui/button'
import ThemeButton from './ui/theme-switcher'
import { CartButton } from '../cart'
import { CartDrawer } from '../cart/cart-drawer'
import { User } from 'lucide-react'
import ProfileButton from './ui/profile-button'
import AuthModal from '../modals/auth-modal/auth-modal'

function Header({ className, hasSearch, hasCart }) {
	const [openAuthModal, setOpenAuthModal] = useState(false)
	return (
		<>
			<HeaderLauout
				hasCart={hasCart}
				hasSearch={hasSearch}
				className={className}
				searchBar={<SearchBar />}
				themeButton={<ThemeButton />}
				profileButton={
					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
				}
				cartDrawer={
					<CartDrawer>
						<CartButton />
					</CartDrawer>
				}
			/>
			<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
		</>
	)
}

export default Header
