import {useContext} from 'react';
import {ShopContext} from '../context';

const BasketItem = (props) => {
    const { mainId, displayName, quantity, regularPrice} = props;
    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);


    return (
        <li className="collection-item">
            {displayName}{' '}<i className="material-icons basket-quantity" onClick={()=>decQuantity(mainId)}>remove</i>{' '}
            x{quantity}{' '}
            <i className="material-icons basket-quantity" onClick={()=>incQuantity(mainId)}>add</i>{' '}= {regularPrice * quantity} ₽
            <span className="secondary-content"
            onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete">delete_outline</i>
            </span>
        </li>
    );
};

export default BasketItem;
