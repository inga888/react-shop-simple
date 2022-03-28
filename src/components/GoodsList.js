import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';
const GoodsList = () => {
  const { goods = []} = useContext(ShopContext);
//addToBasket = Function.prototype} чтобы не сломать
  if (!goods.length) {
    return <h4>Упс... Здесь ничего нет...</h4>
  }
  console.log('goods', goods)
  return (
    <>
    <div className="goods">
      {goods.map(item => (
      <GoodsItem key={item.mainId} {...item}/>
      ))}
    </div>
    </>
  );
}

export default GoodsList;
