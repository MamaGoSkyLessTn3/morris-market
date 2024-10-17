import React from 'react'
import MainLayout from './ui/main-layout'
import Receipts from './ui/receipts'
import Products from './ui/products'

function MainPage() {
	return <MainLayout receipts={<Receipts />} products={<Products />} />
}

export default MainPage
