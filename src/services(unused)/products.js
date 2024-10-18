import { axiosInstance } from './axios'
import { ApiRoutes } from './constants'

export const search = async query => {
	const { data } = await axiosInstance.get('products/search', {
		params: { query },
	})
	return data
}
