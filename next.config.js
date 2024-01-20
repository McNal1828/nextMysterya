const withPWA = require('next-pwa')({
	dest: 'public',
});
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	experimental: {
		serverComponentsExternalPackages: ['mysql2'],
	},
	images: {
		remotePatterns: [
			{
				hostname: '*.mcnal.net',
				pathname: '/**',
				port: '',
				protocol: 'https',
			},
			{
				hostname: 'cdn.discordapp.com',
				pathname: '/**',
				port: '',
				protocol: 'https',
			},
		],
	},
});

module.exports = nextConfig;

// const nextConfig = {
// experimental: {
// 	serverComponentsExternalPackages: ['mysql2'],
// },
// };
