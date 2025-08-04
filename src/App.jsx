import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState, useRef } from "react";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [items, setItems] = useState([]);
  const modal = useRef();

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
  return (
    <div className="mx-[2rem] md:mx-[10rem]">
      <Modal
        ref={modal}
        cartItems={items}
        addQty={handleAddItem}
        dleQty={handleDeleteItem}
      />
      <Header handleCart={cartModal} itemList={items} />
      <MainContent handleAddItem={handleAddItem} />
    </div>
  );
}
