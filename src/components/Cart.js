const Cart = (props) => {
  const {quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
      <div className="cart deep-purple white-text" onClick={handleBasketShow}>
          <i class="material-icons">shopping_cart</i>
          {quantity ? (
          <span className="cart-quantity">{quantity}</span>
          ) : null}
      </div>
  );
}

export default Cart;