import React from 'react'
import Cart from '../../icons/Cart'
import './style.css';

const GiftItem = (props) => {
  const { item } = props;

  const giftItemClick = () => {
    // let modal = document.getElementById("myModal");
    // document.getElementById('myModalContent').innerText = item.name + ', ' + item.price;
    // modal.style.display = "block";
  }

  return (
    <div className="giftItem" onClick={giftItemClick}>
      <img width="197" src={item.imageSrc} />
      <div className="information">
        <span>{item.name}{item.type ? (', ' + item.type) : ''}</span>
        <Cart />
      </div>
      <div className="price">
        {Number(item.price).toLocaleString()}đ
        <span className="discount">{item.discount}</span>
      </div>
    </div>
  )
}

export default GiftItem
