import React from 'react'
import Select from '../Select'
import SearchIcon from '../../icons/SearchIcon'
import Bars from '../../icons/Bars';
import { Store } from '../../store';
import './style.css';
import { useContext } from 'react';

const Filter = () => {
  const store = useContext(Store);

  const status = [
    { label: 'Còn hàng', value: 1 },
    { label: 'Hết hàng', value: 0 }
  ];

  const categories = [
    { label: 'Danh mục 1', value: 'Danh mục 1' },
    { label: 'Danh mục 2', value: 'Danh mục 2' },
    { label: 'Danh mục 3', value: 'Danh mục 3' }
  ];

  const handleSearch = (e) => {
    store.setFilterBySearch(e.target.value);
  }

  return (
    <div className="filterComponent">
        <h1>Mục yêu thích của bạn.</h1>
        <div className="searchInput">
            <SearchIcon />
            <input type="text" value={store.filterBySearch} onChange={handleSearch} />
        </div>
        <div className="listSelect">
            <Select text="Trạng thái" options={status} />
            <Select text="Danh mục" options={categories} />
            <Select text="Sắp xếp" />
            <Bars />
        </div>
    </div>
  )
}

export default Filter
