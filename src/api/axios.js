import axios from 'axios'

// Points at the Django + DRF backend once it's deployed / running locally.
// Set VITE_API_URL in a .env file, e.g. VITE_API_URL=http://127.0.0.1:8000/api/v1
const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1'

const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Basic 401 -> refresh-token retry hook. Wire this up once /auth/refresh/ exists.
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      const refresh = localStorage.getItem('refresh_token')
      if (refresh) {
        try {
          const { data } = await axios.post(`${baseURL}/auth/refresh/`, { refresh })
          localStorage.setItem('access_token', data.access)
          original.headers.Authorization = `Bearer ${data.access}`
          return api(original)
        } catch {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
        }
      }
    }
    return Promise.reject(error)
  }
)

export default api
