import React from 'react'
import {Store} from '../../store/index'
import { useContext } from 'react'

const Select = (props) => {
  const store = useContext(Store);

  const handleFilterChange = (e) => {
    store.setFilterByCategory(e.target.value);
  } 

  return (
    <select value={store.filterByCategory} onChange={handleFilterChange}>
      <option value="-1">{props.text}</option>
      {props.options ? props.options.map( option => (
        <option value={option.value} >{option.label}</option>
      )) : ''}
    </select>
  )
}

export default Select
