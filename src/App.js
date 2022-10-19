import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import React from "react";
import products from "./components/products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <Header total={total} money={money} />
      <div className="container products">
      {products.map((product) => (
        <Product
          total={total}
          money={money}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}</div>
      <Basket total={total} products={products} basket={basket} />
      <button onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>
  );
}

export default App;
