import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../../redux/slices/productSlice';
import Loading from '../../load-err-pages/Loading';
import {  addToCart2, setQuantity } from '../../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

export default function ProductDetail() {
    const { id } = useParams();
    const { productDetail, productStatus } = useSelector(state => state.productSlice);
    const { quantity } = useSelector(state => state.cartSlice);
    const notify = () => toast(`${productDetail?.title} - Added Your Cart!`);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [id])

    const addProductToCart = () => {
        if (quantity > 0) {
            dispatch(addToCart2({ id: productDetail.id, productDetail: productDetail, quantity: quantity, totalprice: productDetail?.price }));
            console.log("ütrn spete eklendi");
            notify();
            setTimeout(() => {
                dispatch(setQuantity(0));
            }, 250)
        }
    }
    return (
        <div className='productDetail-container'>
            {productStatus === 'LOADING' ? <Loading /> :
                <div className='productDetail-wrapper'>
                    <img src={productDetail?.image} alt="" className='productDetail-image' />
                    <div className="productDetail-introduction-content">
                        <div className='productDetail-title' > {productDetail?.title}</div>
                        <div className='productDetail-description' > {productDetail?.description}</div>
                        <div className="price-rate-wrapper">
                            <div className='productDetail-price'> {productDetail?.price} <span>TL</span></div>
                        </div>
                        <div className="piece-cart-wrapper">
                            <div className="piece-wrapper">
                                <div className='decrement-piece piece' >-</div>
                                <input type="number" className='count-input' value={quantity} />
                                <div className='increment-piece piece' >+</div>
                            </div>
                            <div className='add-to-cart-btn' onClick={() => addProductToCart()} >Add To Cart</div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}



