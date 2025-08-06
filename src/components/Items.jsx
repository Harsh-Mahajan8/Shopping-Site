import Card from "./Card";
import data from "../assets/data";
import { useContext } from "react";
import { ItemContext } from "../store/Items-context";

export default function Items() {
  const { handleAddItem } = useContext(ItemContext);
  let handleAddPro = (id) => {
    let item = data.find((item) => item.id == id);
    if (item) {
      handleAddItem(item);
    }
  };
  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          image={item.image}
          handleAddItem={() => handleAddPro(item.id)}
        />
      ))}
    </div>
  );
}
