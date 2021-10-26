import axios from "axios"

const api = axios.create({
  baseURL: `https://geo.ipify.org/api/v1?apiKey=${process.env.API_IPIFY_KEY}`
})

export default api
