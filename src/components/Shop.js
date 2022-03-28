import {useEffect, useContext} from 'react';
import { API_KEY, API_URL} from '../config';
import {ShopContext} from '../context';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
  const {loading, order, isShowBasket, alertName, setGoods} = useContext(ShopContext);

  //getting goods
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
      //eslint-disable-next-line
  }, [])


  return (
   <main className="container content">
     <Cart quantity={order.length}/>
     {loading ? <Preloader /> : (
     <GoodsList />
     )}
     {
       isShowBasket && <BasketList/>
     }
     {
       alertName && <Alert  />
     }
  </main>
  );
}

export default Shop;
