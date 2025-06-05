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
      {nameProv != "" && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Lista de departamentos de {nameProv}
        </h3>
      )}

      <div className="max-h-96 overflow-y-auto space-y-2">
        <ItemList
          items={departamentos}
          renderCallBack={({ id, nombre, centroide }) => (
            <Card
              key={id}
              nombre={nombre}
              onClick={() => setSelectedDep({ id, nombre, centroide })}
              isSelected={selectedDep.id == id}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ListDep;
