import axios from "axios"

const api = axios.create({
  baseURL: `https://api.ipdata.co/`
})

export default api
