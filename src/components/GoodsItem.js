import { useContext } from 'react';
import { ShopContext } from '../context';


const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
  } = props;
  const { full_background } = props.displayAssets[0];
  const {regularPrice} = props.price;

  const {addToBasket} =useContext(ShopContext);
  return (
      <div className="card">
          <div className="card-image">
              <img src={full_background} alt={displayName}/>
          </div>
          <div className="card-content">
          <span className="card-title">{displayName}</span>
              <p>
                  {displayDescription}
              </p>
          </div>
          <div className="card-action">
              <button onClick={()=>addToBasket({
                mainId,
                displayName,
                regularPrice,
              }
              )} className="btn">Купить</button>
              <span className="right" style={{fontSize: '1.8rem'}}>{regularPrice} ₽</span>
          </div>
      </div>
  );
}

export default GoodsItem;
