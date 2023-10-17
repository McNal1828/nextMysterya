const withPWA = require('next-pwa')({
	dest: 'public',
});
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	experimental: {
		serverComponentsExternalPackages: ['mysql2'],
	},
});

module.exports = nextConfig;

// const nextConfig = {
// experimental: {
// 	serverComponentsExternalPackages: ['mysql2'],
// },
// };
