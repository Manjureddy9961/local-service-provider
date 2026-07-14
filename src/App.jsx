import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProviderListing from './pages/ProviderListing.jsx'
import ProviderDetail from './pages/ProviderDetail.jsx'
import BookingForm from './pages/BookingForm.jsx'
import CustomerDashboard from './pages/CustomerDashboard.jsx'
import ProviderDashboard from './pages/ProviderDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/providers" element={<ProviderListing />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/customer/dashboard" element={
          <ProtectedRoute role="customer"><CustomerDashboard /></ProtectedRoute>
        } />
        <Route path="/provider/dashboard" element={
          <ProtectedRoute role="provider"><ProviderDashboard /></ProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
