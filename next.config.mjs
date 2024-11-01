/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/ru', // или '/en', в зависимости от языка по умолчанию
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  