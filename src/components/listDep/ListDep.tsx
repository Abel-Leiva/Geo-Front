import type { Departamento } from "../../types/typesgeoref";
import ItemList from "../itemList/ItemList";
import Card from "../card/Card";
interface ListDepProps {
  selectedDep: Departamento;
  setSelectedDep: (dep: Departamento) => void;
  departamentos: Departamento[];
  nameProv: string;
}
const ListDep = ({
  selectedDep,
  setSelectedDep,
  departamentos,
  nameProv,
}: ListDepProps) => {
  return (
    <div>
      <h3>Lista de departamentos de {nameProv} </h3>

      <ItemList
        items={departamentos}
        renderCallBack={({ id, nombre }) => (
          <Card
            key={id}
            nombre={nombre}
            onClick={() => setSelectedDep({ id, nombre })}
            isSelected={selectedDep.id == id}
          />
        )}
      />
    </div>
  );
};

export default ListDep;
