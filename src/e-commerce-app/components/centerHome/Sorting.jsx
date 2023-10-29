import React from 'react'

export default function Sorting({ setSort }) {
  return (
    <div className='sorting-container'>
      <select onChange={e => setSort(e.target.value)} name="" id="" className='select-container'>
        <option className='opt first' value="inc">Increment Price</option>
        <option className='opt second' value="dec">Decrement Price</option>
      </select>
    </div>
  )
}



