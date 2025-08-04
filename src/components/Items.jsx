import Card from "./Card";
import data from "../assets/data";

export default function Items({ addItems }) {
  let handleAddItem = (id) => {
    let item = data.find((item) => item.id == id);
    if (item) {
      addItems(item);
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
          handleAddItem={() => handleAddItem(item.id)}
        />
      ))}
    </div>
  );
}
