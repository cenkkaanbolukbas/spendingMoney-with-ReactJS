import BasketItem from "../components/BasketItem";
function Basket({ basket, products, total }) {
  return (
    <div>
      {basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}

      {total > 0 && <div>Toplam: ${total} harcandı.</div>}
    </div>
  );
}
export default Basket;
