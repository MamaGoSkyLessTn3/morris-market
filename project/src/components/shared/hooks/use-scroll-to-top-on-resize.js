import { useEffect } from 'react'

const useScrollToTopOnResize = (widthThreshold = 768) => {
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > widthThreshold) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [widthThreshold])
}

export default useScrollToTopOnResize
