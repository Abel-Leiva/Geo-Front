export interface ItemListProps<Item> {
  items: Item[];
  renderCallBack: (item: Item) => React.ReactNode;
  className?: string;
}
