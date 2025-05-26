'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { CircleUser, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function ProfileButton({ onClickSignIn }) {
	const { data: session } = useSession()

	return (
		<div>
			{!session ? (
				<Button onClick={onClickSignIn} variant='profile'>
					<User width={16} className='' />
					Войти
				</Button>
			) : (
				<Link href={'/profile'}>
					<Button variant='profile' className='flex items-center gap-2'>
						<CircleUser width={18} className='' />
						Профиль
					</Button>
				</Link>
			)}
		</div>
	)
}

export default ProfileButton
