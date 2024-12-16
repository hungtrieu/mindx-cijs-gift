import React from 'react'
import Close from '../../icons/Close';
import './style.css';

const ModalCreate = (props) => {
    const {newGift, setNewGift, setGifts }  = props;

    const handleChange = (e) => {
        const elmentName = e.target.name;
        const elementValue = e.target.value;
        setNewGift({
            ...newGift,
            [elmentName]: elementValue
        })
        // console.log(newGift);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGifts();
        console.log(newGift);
        props.onClose();
    }
 
  return (
    <div className="modal">
    {/* Thêm input để nhập liệu thông tin sản phẩm: name, imageSrc, price, rating 
    - Ý tưởng:
      - Mỗi lần thay đổi dữ liệu trong các ô input, thì cần lấy được toàn bộ dữ liệu để có thể log ra
    */}
    <div className="modalContent createGift">
        <div className="row control">
            <Close onClick={props.onClose} />
        </div>
    
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input name="name" type="text" value={newGift.name} onChange={(e) => handleChange(e)} placeholder='Nhập tên sản phẩm' />
                </div>
                <div className="form-group">
                    <label>Ảnh</label>
                    <input name="imageSrc" type="text" value={newGift.imageSrc} onChange={(e) => handleChange(e)} placeholder='Link ảnh sản phẩm' />
                </div>
                <div className="form-group">
                    <label>Giá</label>
                    <input name="price" type="text" value={newGift.price} onChange={(e) => handleChange(e)} placeholder='Nhập giá sản phẩm' />
                </div>
                <div className="form-group">
                    <label>Đánh giá</label>
                    <input name="rating" type="text" value={newGift.rating} onChange={(e) => handleChange(e)} placeholder='Đánh giá' />
                </div>
                <div className="form-group">
                    <button type="submit">Lưu sản phẩm</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default ModalCreate
