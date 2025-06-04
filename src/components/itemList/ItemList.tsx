import type { ItemListProps } from "./type";

const ItemList = <Item,>({
  items,
  renderCallBack,
  className,
}: ItemListProps<Item>) => {
  return (
    <>
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>{renderCallBack(item)}</li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
