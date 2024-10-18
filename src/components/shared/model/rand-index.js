export function GetOtherRecipes(array, id) {
	if (!Array.isArray(array)) {
		console.error('Передан не массив')
		return []
	}
	return array
		.filter(item => String(item.id) !== String(id))
		.sort(() => Math.random() - 0.5)
}
