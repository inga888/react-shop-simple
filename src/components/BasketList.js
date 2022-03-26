import BasketItem from './BasketItem';

const BasketList = (props) => {
  const {order =[],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  console.log(999, order,'props', props)
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0)


  return (
    <ul className="collection basket-list">
    <li className="collection-item active">Корзина</li>
    {
      order.length ? order.map(item => (
        <BasketItem
        key={item.mainId}
        {...item}
        removeFromBasket={removeFromBasket}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
        />
      )) : <li className="collection-item">Корзина пуста</li>
    }
    <li className="collection-item active">Общая стоимость: {totalPrice} ₽
    </li>
    <li className="collection-item">
    <button className="btn btn-small">Оформить</button>
    </li>
    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
  </ul>
  );
}

export default BasketList;
