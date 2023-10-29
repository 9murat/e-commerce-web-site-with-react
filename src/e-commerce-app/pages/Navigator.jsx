import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from '../components/navbar/Navbar'
import ProductDetail from '../components/centerHome/products/ProductDetail'
import CartPage from '../components/navbar/navbarItem/cart/CartPage'
export default function Navigator() {
    return (
        <div className='navigator-container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products/:id' element={<ProductDetail />} />
                    <Route exact path='/cart' element={<CartPage />} />
                </Routes>
            </Router>
        </div>
    )
}



