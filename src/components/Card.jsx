import Button from "./Button";
export default function Card({ title, detail, image, price, handleAddItem }) {
  return (
    <div className="card sm:w-2/5 md:w-[18.65rem] m-2 bg-yellow-900 rounded flex flex-col hover:opacity-90">
      <div className="itemDetail">
        <img
          src={image}
          alt=""
          className="w-full max-h-[179.6px] md:max-h-[270px] object-fit rounded-t hover:opacity-95"
        />
        <div className="details p-3">
          <h2 className="text-orange-300 font-serif font  -bold">
            {title}
          </h2>
          <p className="text-orange-100 text-sm font-semibold">${price}</p>
          <p className="text-amber-100 text-sm mt-2">{detail}</p>
        </div>
      </div>
      <div className="mt-auto p-3 flex justify-end">
        <Button  onClick = {handleAddItem}>Add to Cart</Button>
      </div>
    </div>
  );
}
