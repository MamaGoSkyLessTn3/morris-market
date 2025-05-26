'use client'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

export const AdressInput = ({ onChange }) => {
	return (
		<div>
			<AddressSuggestions
				token='fe3352de717a5833fb94af801405db09f02e8d7d'
				onChange={data => onChange(data?.value)}
			/>
		</div>
	)
}
