import logo from "../assets/logo.png";
import Button from "./Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { ItemContext } from "../store/Items-context";

export default function Header() {
  const CardCtx = useContext(ItemContext);

  const items = CardCtx.items.reduce((total, item) => total + item.qty, 0);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[2rem] bg-yellow-950 mx-[1.2rem] md:mx-[10rem]">
      <div className="flex items-center">
        <img className="img" src={logo} alt="Logo" />
        <h1 className="text-orange-300 uppercase font-bold font-serif text-[.85rem] md:text-3xl ml-3">
          elegant content
        </h1>
      </div>
      <p>
        <Button onClick={() => CardCtx.cartModal()}>
          <ShoppingCartIcon className=" disply"></ShoppingCartIcon>
          <span className="ms-1 hide">Cart</span>{" "}
          {items > 0 ? `(${items})` : ""}
        </Button>
      </p>
    </header>
  );
}
