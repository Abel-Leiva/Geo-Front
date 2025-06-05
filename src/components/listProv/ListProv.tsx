//components
import Card from "../card/Card.tsx";
//vendors
import ItemList from "../itemList/ItemList.tsx";

//types
import type { Provincia } from "../../types/typesgeoref.ts";
interface ListProvProps {
  selectedProv: Provincia;
  setSelectedProv: (prov: Provincia) => void;
  provincias: Provincia[];
}
//
const ListProv = ({
  selectedProv,
  setSelectedProv,
  provincias,
}: ListProvProps) => {
  return (
    <div>
      {selectedProv.nombre === "" ? (
        <div className="flex items-center gap-2 text-gray-500 text-base mb-2 animate-bounce">
          <span>⬇️</span>
          <span>Elija una Provincia</span>
        </div>
      ) : (
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Lista de provincias
        </h3>
      )}

      <div className="max-h-96 overflow-y-auto space-y-2">
        <ItemList
          items={provincias ?? []}
          renderCallBack={({ id, nombre, centroide }) => (
            <Card
              key={id}
              nombre={nombre}
              onClick={() => setSelectedProv({ id, nombre, centroide })}
              isSelected={selectedProv.id === id}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ListProv;
{
  /* <div className={style.cardConteiner}>
        {provincias?.map(({ id, nombre, centroide }: Provincia) => (
          <Card
            key={id}
            nombre={nombre}
            longitud={centroide.lon}
            latitud={centroide.lat}
            onClick={() => setSelectedProv(id)}
            isSelected={selectedProv === id}
          />
        ))}
      </div> */
}
