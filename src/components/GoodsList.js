import GoodsItem from './GoodsItem';
const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype} = props;
//addToBasket = Function.prototype} чтобы не сломать
  if (!goods.length) {
    return <h4>Упс... Здесь ничего нет...</h4>
  }
  console.log('goods', goods)
  return (
    <>
    <div className="goods">
      {goods.map(item => (
      <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
    </>
  );
}

export default GoodsList;
