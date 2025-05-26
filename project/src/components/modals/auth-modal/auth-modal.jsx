import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import LoginForm from './login-form'
import RegisterForm from './register-from'

function AuthModal({ open, onClose }) {
	const [type, setType] = useState('login')

	const onSwitchType = () => {
		setType(type === 'login' ? 'register' : 'login')
	}
	const handleClose = () => {
		onClose()
	}

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className='w-[380px] max-h-full bg-background p-4 rounded-lg'>
				{type === 'login' ? (
					<LoginForm onClose={handleClose} />
				) : (
					<RegisterForm onClose={handleClose} />
				)}
				<hr className='mb-2' />
				{type === 'login' && (
					<>
						<div className='flex flex-col  gap-2'>
							<Button
								className='gap-2 h-12 p-3 flex-1 bg-hover rounded-2xl shadow-md transition-colors flex items-center justify-center'
								type='button'
								onClick={() => {
									signIn('github', { callbackUrl: '/', redirect: true })
								}}
							>
								<Image
									src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
									alt='GitHub'
									width={24}
									height={24}
								/>
								<span className='font-medium whitespace-nowrap text-foreground'>
									GitHub
								</span>
							</Button>
						</div>
						<hr className='mt-2' />
					</>
				)}

				<Button
					variant='outline'
					onClick={onSwitchType}
					type='button'
					className='h-12 rounded-2xl'
				>
					{type === 'login' ? 'Регистрация' : 'Вход'}
				</Button>
			</DialogContent>
		</Dialog>
	)
}

export default AuthModal
