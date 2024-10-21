export const VAT = 15
export const DELIVERY_PRICE = 42
export const calcCheckoutBarTotalPrice = (totalAmount, VAT, DELIVERY_PRICE) => {
	if (totalAmount === 0) {
		return {
			totalPrice: 0,
			vatPrice: 0,
		}
	}
	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE
	return { totalPrice, vatPrice }
}
