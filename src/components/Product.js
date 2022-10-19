function Product({ product, basket, total, money, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, checkBasket]);
    }
  };

  return (
    <div className="product">
      <img className="product" src={product.image} alt=""/>
      <h3>{product.title}</h3>
      <div className="price">$ {product.price}</div>
      <div className="actions">
        <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>
          Sat
        </button>
        <span className="amount">
          {" "}
          {(basketItem && basketItem.amount) || 0}{" "}
        </span>
        <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>
          Satın Al
        </button>
      </div>

      <style jsx>
        {`
          .product {
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width:25%;
            
          }
          .product img{
            width:100%;
          }
          .product h6{
            font-size: 20px;
            margin-bottom: 10px;
          }
          .product .actions{
            display: flex;
            align-items: center;
          }
          .product .price{
            font-size: 20px;
            color: green;
          }
          .actions .button{
            height: 40px;
            padding:0 15px;
            flex: 1;
          }
          .actions .amount{
            width: 50px;
            text-align: center;
          }
          {
          .actions .buy-btn {
            background: #61dafb;
          }
          }
        `}
      </style>
    </div>
  );
}
export default Product;
