import React from 'react'
import ReceiptsLayout from './ui/receipts-layout'
import Info from './ui/info'
import ReceiptBreadCrumb from './ui/r-breadcrumb'
import { receipts } from '@/public/constants'
import ProductsCarousel from './ui/products-carousel'

function ReceiptsPage() {
	return (
		<ReceiptsLayout
			receiptBreadCrumb={<ReceiptBreadCrumb />}
			info={
				<Info
					name={receipts[0].name}
					imageURL={receipts[0].imageURL}
					tags={receipts[0].tags}
					ingredients={receipts[0].ingredients}
				/>
			}
			productsCarousel={<ProductsCarousel />}
		/>
	)
}

export default ReceiptsPage
