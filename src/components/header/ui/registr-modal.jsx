import { Button } from '@/components/ui/button'
import UiModal from '@/components/ui/uiModal'
import React from 'react'

function RegistrModal({ isOpen, setIsOpen }) {
	const onClose = () => {
		setIsOpen(false)
	}
	return (
		<UiModal isOpen={isOpen} onClose={onClose}>
			<UiModal.Header className='font-bold text-2xl'>
				Вход на сайт
			</UiModal.Header>
			<UiModal.Body>Формы</UiModal.Body>
			<UiModal.Footer>
				<Button size='xl'>Войти</Button>
			</UiModal.Footer>
		</UiModal>
	)
}

export default RegistrModal
