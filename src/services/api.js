import axios from "axios"

const api = axios.create({
  baseURL: `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.NEXT_PUBLIC_API_IPIFY_KEY}`
})

export default api
