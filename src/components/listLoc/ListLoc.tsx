import React from "react";
import ItemList from "../itemList/ItemList";
import type { Localidad } from "../../types/typesgeoref";
import Card from "../card/Card";
//types
interface ListPropLoc {
  selectedLoc: Localidad;
  setSelectedLoc: (loc: Localidad) => void;
  localidades: Localidad[];
  nameProv?: string;
  nameDep?: string;
}
const ListLoc = ({
  localidades,
  selectedLoc,
  setSelectedLoc,
  nameDep,
  nameProv,
}: ListPropLoc) => {
  return (
    <div>
      <h3>
        localidades del departamento {nameDep}, de la provincia {nameProv}
      </h3>
      <ItemList
        items={localidades}
        renderCallBack={({ id, nombre }) => (
          <Card nombre={nombre} onClick={() => console.log(nombre)} />
        )}
      />
    </div>
  );
};

export default ListLoc;
