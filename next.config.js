/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {nextConfig,
  images: {
    unoptimized: true,
    domains: ['gatsby-starter-portfolio-minimal.netlify.app', "sendatrack.com","scontent.ftng2-1.fna.fbcdn.net","github-production-user-asset-6210df.s3.amazonaws.com" ], // Add your domain here
  },
};