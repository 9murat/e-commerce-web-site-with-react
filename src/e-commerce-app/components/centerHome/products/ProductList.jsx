import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProducts } from '../../../redux/slices/productSlice';
import Products from './Products';
import Loading from '../../load-err-pages/Loading';
import ReactPaginate from 'react-paginate';

export default function ProductList({ category, sort }) {
  const { products, productStatus } = useSelector(state => state.productSlice);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category))
    } else {
      dispatch(getProducts())
    }

  }, [category])

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className=''>
      {productStatus === 'LOADING' ? <Loading /> :
        <div className='product-list-container'>
          {currentItems.sort((a, b) => sort == 'inc' ? a.price - b.price : sort == 'dec' ? b.price - a.price : null).map((product, i) => (
            <Products key={i} product={product} />

          ))}
        </div>}
      <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />

    </div>
  )
}
