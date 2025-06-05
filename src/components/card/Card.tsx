interface CardProp {
  nombre: string;
  onClick: () => void;
  isSelected?: boolean;
}

const Card = ({ nombre, onClick, isSelected }: CardProp) => {
  return (
    <div
      className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected
          ? "border-blue-500 bg-blue-50 text-blue-900"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <span className="font-medium">{nombre}</span>
    </div>
  );
};
export default Card;
