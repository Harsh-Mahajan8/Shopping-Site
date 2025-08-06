import { createContext, useState } from "react";

export const ItemContext = createContext({
  items: [],
  handleAddItem: () => {},
  handleDeleteItem: () => {},
  cartModal: () => {},
});

export default function CardContextProvider({ children, modal }) {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevalues) => {
      const existingItem = prevalues.find((product) => product.id === item.id);

      if (existingItem) {
        return prevalues.map((product) =>
          product.id === item.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        return [...prevalues, { id: item.id, qty: 1 }];
      }
    });
  };

  const handleDeleteItem = (item) => {
    setItems((prevalues) => {
      const existingItem = prevalues.find((product) => product.id === item.id);

      if (!existingItem) return prevalues;

      if (existingItem.qty > 1) {
        // Decrease quantity by 1
        return prevalues.map((product) =>
          product.id === item.id
            ? { ...product, qty: product.qty - 1 }
            : product
        );
      } else {
        // Remove item completely when qty is 1
        return prevalues.filter((product) => product.id !== item.id);
      }
    });
  };

  const cartModal = () => {
    modal.current.open();
  };
  console.log(items);

  let context = {
    items: items,
    handleAddItem: handleAddItem,
    handleDeleteItem: handleDeleteItem,
    cartModal: cartModal,
  };
  return (
    <ItemContext.Provider value={context}>{children}</ItemContext.Provider>
  );
}
