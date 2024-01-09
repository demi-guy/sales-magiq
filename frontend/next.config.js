/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_IP: "http://localhost:5000"
  }
}

module.exports = nextConfig
