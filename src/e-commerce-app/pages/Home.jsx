import React, { useState } from 'react'
import SliderPage from '../components/centerHome/SliderPage'
import Sorting from '../components/centerHome/Sorting';
import CategoryList from '../components/centerHome/categories/CategoryList';
import ProductList from '../components/centerHome/products/ProductList';


export default function Home() {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className='home-container'>
      <SliderPage />
      <Sorting setSort={setSort} />
      <div className="list-container">
        <CategoryList setCategory={setCategory} />
        <ProductList category={category} sort={sort}/>
      </div>
    </div>
  )
}
