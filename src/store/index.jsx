import React from 'react'
import { createContext, useState } from 'react';
import giftsList from '../data'

export const Store = createContext({
    gifts: [],
    setGifts(newGifts) {},
    filterByCategory: -1,
    setFilterByCategory(newCategory) {},
    filterBySearch: '',
    setFilterBySearch(newSearch) {}
});

const StoreProvider = (props) => {
  const [gifts, setGifts] = useState( () => {
    const currentGifts = localStorage.getItem("gifts") ?
      JSON.parse(localStorage.getItem("gifts")) : 
      giftsList;
    return currentGifts;
  });

  const [filterByCategory, setFilterByCategory] = useState(-1);

  const [filterBySearch, setFilterBySearch] = useState('');

  return <Store.Provider value={{
      gifts, 
      setGifts,
      filterByCategory,
      setFilterByCategory,
      filterBySearch,
      setFilterBySearch
    }}>
    {props.children}
  </Store.Provider>
}

export default StoreProvider;