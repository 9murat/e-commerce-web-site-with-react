import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/slices/categorySlice';
import Loading from '../../load-err-pages/Loading';

export default function CategoryList({ setCategory }) {
  const { categories, categoryStatus } = useSelector(state => state.categorySlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className='category-list-container'>
      {categoryStatus === 'LOADING' ? <Loading /> :
        <div>
          {categories?.map((category, i) => (
            <div onClick={() =>setCategory(category)} key={i} className='category-item'>{category}</div>
          ))}
        </div>
      }


    </div>
  )
}
