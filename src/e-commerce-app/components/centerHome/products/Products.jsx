import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart2} from '../../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

export default function Products({ product }) {
    const notify = () => toast(`${product?.title} - Added Your Cart!`);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addToCart2({ id: product.id, productDetail: product, quantity: 1, totalprice: product?.price }));
        notify();
    }

    const goToDetail = () => {
        navigate(`/products/${product.id}`)
    }
    return (
        <div className='product-item-container' >
            <div className='product-price'> {product.price} <span>TL</span></div>
            <img src={product.image} alt="" className='product-image' onClick={() => goToDetail()} />
            <div className='product-title' onClick={() => goToDetail()}> {product.title}</div>
            <div className='products-btn-wrapper'>
                <div className='add-to-cart-btn products-btn' onClick={addProductToCart} >Add To Cart</div>
            </div>

        </div>
    )
}


