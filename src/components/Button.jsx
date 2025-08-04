export default function Button({ children, ...props }) {
  return (
    <button
      className="font-semibold cursor-pointer bg-orange-300 p-1 px-4 rounded text-amber-950 hover:bg-amber-500 hover:text-amber-50 sm:text-base text-center flex items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
}
