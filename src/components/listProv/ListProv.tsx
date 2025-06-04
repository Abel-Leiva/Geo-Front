//style
import style from "./ListProv.module.css";
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
    <div className={style.conteiner}>
      <h2>Lista de provincias</h2>

      <ItemList
        className={style.cardConteiner}
        items={provincias ?? []}
        renderCallBack={({ id, nombre }) => (
          <Card
            key={id}
            nombre={nombre}
            onClick={() => setSelectedProv({ id, nombre })}
            isSelected={selectedProv.id === id}
          />
        )}
      />
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
