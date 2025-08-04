import { forwardRef, useRef, useImperativeHandle } from "react";
import originalData from "../assets/data.js";

const Modal = forwardRef(function Modal({ cartItems, addQty, dleQty }, ref) {
  const modal = useRef();

  let getProduct = (id) => {
    let product = originalData.find((pro) => pro.id === id);
    return product;
  };

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  let netPrice = cartItems.reduce(
    (total, item) => total + getProduct(item.id).price * item.qty,
    0
  );

  let content = <p className="text-orange-900">The Cart is empty...</p>;
  if (cartItems.length > 0) {
    content = (
      <ul>
        {cartItems.map((item) => {
          return (
            <li
              key={item.id}
              className="text-center content-center bg-orange-200 m-2 p-2 rounded flex justify-between text-[.85rem] md:text-base"
            >
              <div className="item">
                {getProduct(item.id).title}(${getProduct(item.id).price})
              </div>
              <div className="gap-2 ms-5">
                <button className="qty" onClick={() => dleQty(item)}>
                  -
                </button>
                <span className="mx-2">{item.qty}</span>
                <button className="qty" onClick={() => addQty(item)}>
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <dialog
      ref={modal}
      className="min-w-1/3 backdrop:bg-orange-950/80 bg-orange-300 md:w-2/5 rounded p-3 px-4 mx-auto my-auto "
    >
      <div className="modal-content">
        <h1 className="uppercase text-orange-950 font-serif text-xl md:text-2xl font-bold">
          Your Cart
        </h1>
        {content}
        <p className="text-orange-950 font-serif text-right me-3 mt-4">
          Card Total = ${netPrice}
        </p>
        <form method="dialog" className="text-right">
          <button className="hover:bg-orange-200 hover:text-amber-950 button">
            Close
          </button>
          <button className="button bg-amber-900 text-amber-100 hover:bg-amber-950 hover:text-amber-50 mt-2">
            Checkout
          </button>
        </form>
      </div>
    </dialog>
  );
});
export default Modal;
