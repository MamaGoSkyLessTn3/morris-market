'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'

function UiModal({
	width = 'md',
	height,
	className,
	children,
	isOpen = false,
	onClose,
}) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleClick = e => {
		if (onClose) {
			const isModal = e.target.closest('[data-id=modal]')
			if (isModal) return
			onClose()
		}
	}

	// Ожидание рендеринга на клиенте
	if (!mounted) return null

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div
					onClick={handleClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className='fixed inset-0 z-50 bg-black/60 backdrop-blur py-10 overflow-y-auto'
				>
					<motion.div
						data-id='modal'
						initial={{ scale: 0.8, y: 50 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.8, y: 50 }}
						transition={{ duration: 0.3 }}
						className={clsx(
							'bg-background rounded-lg z-50 min-h-[320px] mx-auto relative flex flex-col',
							{
								'max-w-[640px] w-full': width === 'md',
								'mx-5': width === 'full',
								'ml-auto h-lvh w-[20%]': height === 'full',
							},
							className
						)}
					>
						{onClose && (
							<button
								onClick={onClose}
								className='w-8 h-8 flex items-center justify-center bg-white/10 absolute top-0 left-[calc(100%+12px)] rounded hover:bg-white/20 transition-colors'
							>
								<XIcon className='w-6 h-6 text-white' />
							</button>
						)}
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('modals')
	)
}

export default UiModal

UiModal.Header = function UiModalHeader({ children, className }) {
	return (
		<div className={clsx(className, 'px-6 pt-6 pb-4 text-2xl')}>{children}</div>
	)
}

UiModal.Body = function UiModalBody({ children, className }) {
	return <div className={clsx(className, 'px-6 ')}>{children}</div>
}

UiModal.Footer = function UiModalFooter({ children, className }) {
	return (
		<div className={clsx(className, 'p-6 flex gap-4 justify-end mt-auto')}>
			{children}
		</div>
	)
}
