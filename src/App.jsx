import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal.jsx";
import Items from "./components/Items.jsx";
import { useRef } from "react";
import CardContextProvider from "./store/Items-context.jsx";

export default function App() {
    const modal = useRef();
  return (
    <CardContextProvider modal = {modal}>
      <div className="mx-[2rem] md:mx-[10rem]">
        <Modal ref={modal} />
        <Header />
        <MainContent>
          <Items />
        </MainContent>
      </div>{" "}
    </CardContextProvider>
  );
}
