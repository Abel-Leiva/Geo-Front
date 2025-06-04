import style from "./card.module.css";
interface CardProp {
  nombre: string;
  onClick: () => void;
  isSelected?: boolean;
}

const Card = ({ nombre, onClick, isSelected }: CardProp) => {
  return (
    <div
      className={style.cardConteiner}
      onClick={onClick}
      style={{ border: isSelected ? "2px solid red" : "1px solid gray" }}
    >
      <span>{nombre}</span>
    </div>
  );
};
export default Card;
