/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {nextConfig,
  images: {
    domains: ['gatsby-starter-portfolio-minimal.netlify.app', "sendatrack.com","scontent.ftng2-1.fna.fbcdn.net"], // Add your domain here
  },
};