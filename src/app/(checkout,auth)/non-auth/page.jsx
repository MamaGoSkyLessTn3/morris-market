import InfoBlock from '@/components/shared/ui/info-block'
import Image from 'next/image'

export default function UnauthorizedPage() {
	return (
		<div className='flex flex-col items-center justify-center mt-40'>
			<InfoBlock
				title='Доступ запрещён'
				text='Данную страницу могут просматривать только авторизованные пользователи'
				imageUrl='/assets/lock.png'
			/>
		</div>
	)
}
