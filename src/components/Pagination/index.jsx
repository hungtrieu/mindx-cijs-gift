import React from 'react'
import './style.css';
import PagingArrow from '../../icons/PagingArrow';

const Pagination = () => {
  return (
    <div className="bottomPagination">
      <PagingArrow />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      ...
      <PagingArrow className="turnRight" />
    </div>
  )
}

export default Pagination
