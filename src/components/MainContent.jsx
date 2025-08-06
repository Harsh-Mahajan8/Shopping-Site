import Items from "./Items";

export default function MainContent({children }) {
  return (
    <div className="main-content mx-auto mt-[6.9rem] md:mt-[9rem]">
      {" "}
      <p className="uppercase font-serif m-1 text-orange-100 text-[0.85rem] md:text-base">
        elegent clothing for everyone
      </p>
      {children}
    </div>
  );
}
