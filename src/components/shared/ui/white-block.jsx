import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'
import React from 'react'

function WhiteBlock({
	title,
	endArodment,
	children,
	className,
	contentClassName,
}) {
	return (
		<div className={cn(className, 'bg-background  rounded-3xl')}>
			{title && (
				<div className='flex items-center justify-between p-5 px-7 border-b border-hover'>
					<Title size='large' className='text-foreground font-bold'>
						{title}
					</Title>
					{endArodment}
				</div>
			)}
			<div className={cn(contentClassName, 'p-4 px-5')}>{children}</div>
		</div>
	)
}

export default WhiteBlock
