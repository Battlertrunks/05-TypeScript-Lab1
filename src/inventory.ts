import { InventoryItem } from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "Motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "Sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (stock: InventoryItem[]): number => {
  let total: number = 0;
  stock.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
};

console.log(calcInventoryValue(inventory));
