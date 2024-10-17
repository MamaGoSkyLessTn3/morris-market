// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['web-static.samokat.ru', 'cm.samokat.ru'], // добавьте сюда нужные домены
	},
}

// Используйте export вместо module.exports
export default nextConfig
