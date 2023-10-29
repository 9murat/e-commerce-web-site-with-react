import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllCart, removeFromCart } from '../../../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs'

export default function CartPage() {
    const { carts, totalAmount } = useSelector(state => state.cartSlice);
    const dispatch = useDispatch();

    const clearAllItem = () => {
        dispatch(clearAllCart());
    }

    return (
        <div className='cart-page-container'>
            <div className='child-cart-page-container'>
                {carts?.map((item, i) => (
                    <div key={i} className='cart-detail-wrapper'>
                        <div className='cart-image-wrapper'>
                            <img src={item?.productDetail?.image} alt="" />
                        </div>
                        <div className='cart-item-details'>
                            <div className='cart-title'>{item?.productDetail?.title}</div>
                            <div className='cart-price'>{item?.productDetail?.price} <span>TL</span></div>
                            <div className='quantity-trash-wrapper'>
                                <div className='increase-decrease-wrapper'>
                                    <div className='decrease-item-btn qty-btn' >-</div>
                                    <div className='cart-item-quantity'>{item?.quantity}</div>
                                    <div className='increase-item-btn qty-btn' >+</div>
                                </div>
                                <div onClick={() => dispatch(removeFromCart({ id: item?.productDetail?.id }))}><BsTrash className='trash' /></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='complete-cart-wrapper-container'>
                {carts.length > 0 ?
                    <div className='complete-cart-wrapper'>
                        <div onClick={() => clearAllItem()}>Clear All Cart</div>
                        <div className='selected-products'>Selected Products ({carts.length})</div>
                        <div className='total-price'>{totalAmount} <span>TL</span></div>
                        <div className='complete-cart-btn'>Complete Shopping</div>
                    </div> : <div className='cart-information-wrapper'>
                        <h1 className='cart-empty'>Your Cart is Empty</h1>
                        <Link to='/' className='kepp-shopping-link'>You can continue shopping by clicking here</Link>

                    </div>
                }
            </div>
        </div>
    )
}




