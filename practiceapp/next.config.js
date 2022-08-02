/** @type {import('next').NextConfig} */
const API_KEY = "3cdc17d9e3824a2e512bea5357655b0b";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return[
      {
        source:"/old-blog/:path*",
        destination:"/new-blog/:path*",
        permanent:false,
      }
    ]
  },
  async rewrites(){
    return[
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
