import {useState, useEffect} from 'react';
import { API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] =useState(true);
  const [order, setOrder] = useState([]);
  const [isShowBasket, setShowBasket] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    // const id = item.mainId;
    // const price = item.regularPrice;
    // const name = item.displayName;
    const itemIndex = order.findIndex(orderItem =>
       orderItem.mainId === item.mainId)

    if (itemIndex < 0) {
      const newItem = {
      ...item,
      quantity: 1,
    }
    setOrder([...order, newItem]);
  } else {
    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        }

      } else {
        return orderItem;
      }
    })
    setOrder(newOrder);
  }
  setAlertName(item.displayName);
}
console.log('order in shop', order)
const removeFromBasket =(itemId) => {
  const newOrder = order.filter((el) => el.mainId !== itemId)
  setOrder(newOrder);
}

const incQuantity = (itemId) => {
  const newOrder = order.map(el => {
    if (el.mainId === itemId) {
      const newQuantity = el.quantity + 1;
      return {
        ...el,
        quantity: newQuantity,
      }
    } else {
      return el;
    }
  });
  setOrder(newOrder);
}
const decQuantity = (itemId) => {
  const newOrder = order.map(el => {
    if (el.mainId === itemId) {
      const newQuantity = el.quantity - 1;
      return {
        ...el,
        quantity: newQuantity >= 0 ? newQuantity : 0,
        //проверяем что не ниже нуля
      }
    } else {
      return el;
    }
  });
  setOrder(newOrder);

}
 const handleBasketShow = () => {
  setShowBasket(!isShowBasket);
 };

 const closeAlert = () => {
   setAlertName('');
 }

  //getting goods
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, [])

console.log(goods)
  return (
   <main className="container content">
     <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
     {loading ? <Preloader /> : (
     <GoodsList goods={goods} addToBasket={addToBasket}/>
     )}
     {
       isShowBasket && <BasketList
       order={order}
       handleBasketShow={handleBasketShow}
       removeFromBasket={removeFromBasket}
       incQuantity={incQuantity}
       decQuantity={decQuantity}
       />
     }
     {
       alertName && <Alert name={alertName} closeAlert={closeAlert}/>
     }
  </main>
  );
}

export default Shop;
