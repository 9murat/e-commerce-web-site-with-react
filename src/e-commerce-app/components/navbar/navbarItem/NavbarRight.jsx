import React, { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/slices/cartSlice'

export default function NavbarRight() {
    const { itemCount,carts ,totalAmount} = useSelector(state => state.cartSlice);
    console.log(totalAmount,'navbar toalAmount');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);
    return (
        <div className='navbar-right-container'>
            <div className='search-container'>
                <input className='search-input' type="text" placeholder='Search what you want...' />
                <BsSearch className='icon search' />
            </div>
            <AiOutlineHeart className='icon heart' />
            <div className='cart-quantity-icon-container'>
                <div className='cart-quantity'>{carts.length}</div>
                <AiOutlineShoppingCart onClick={() => navigate('/cart')} className='icon cart' />
            </div>
        </div>
    )
}


