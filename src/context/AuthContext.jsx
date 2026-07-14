import React, { createContext, useContext, useState } from 'react'
// import api from '../api/axios' // uncomment once /auth/login/ exists on the backend

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('lsb_user')
    return saved ? JSON.parse(saved) : null
  })

  // MOCK login — replace body with a real POST to /auth/login/ that returns
  // { access, refresh, user: { id, name, email, role } } and store the tokens.
  const login = async ({ email, role }) => {
    const mockUser = { id: 1, name: email.split('@')[0], email, role }
    localStorage.setItem('lsb_user', JSON.stringify(mockUser))
    localStorage.setItem('access_token', 'mock-access-token')
    setUser(mockUser)
    return mockUser
  }

  const register = async ({ name, email, role }) => {
    const mockUser = { id: Date.now(), name, email, role }
    localStorage.setItem('lsb_user', JSON.stringify(mockUser))
    localStorage.setItem('access_token', 'mock-access-token')
    setUser(mockUser)
    return mockUser
  }

  const logout = () => {
    localStorage.removeItem('lsb_user')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
