import ItemList from "../itemList/ItemList";
import type { Localidad } from "../../types/typesgeoref";
import Card from "../card/Card";
//types
interface ListPropLoc {
  selectedLoc: Localidad;
  setSelectedLoc?: (loc: Localidad) => void;
  localidades: Localidad[];
  nameProv?: string;
  nameDep?: string;
}
const ListLoc = ({
  localidades,
  selectedLoc,

  nameDep,
  nameProv,
}: ListPropLoc) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Localidades del departamento {nameDep}, de la provincia de {nameProv}
      </h3>

      <div className="max-h-96 overflow-y-auto space-y-2">
        <ItemList
          items={localidades}
          renderCallBack={({ id, nombre }) => (
            <Card
              key={id}
              nombre={nombre}
              onClick={() => console.log(nombre)}
              isSelected={selectedLoc.id === id}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ListLoc;
