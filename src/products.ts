import Product from "./models/Product";

const products: Product[] = [
  {
    name: "PlayStation",
    price: 499.99,
  },
  {
    name: "Xbox Series X",
    price: 499.99,
  },
  {
    name: "Samsung 45inch",
    price: 345,
  },
  {
    name: "iPhone 13 Pro",
    price: 1000,
  },
];

const calcAverageProductPrice = (products: Product[]): number => {
  if (products.length == 0) return 0;
  let initialVal: number = 0;
  return (
    products.reduce((prev, cur) => prev + cur.price, initialVal) /
    products.length
  );
};

console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice([]));
