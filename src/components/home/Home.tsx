//vendors
import { useEffect, useState } from "react";
import useFetch from "../../customHooks/UseFetch";
import style from "./Home.module.css";
import ListProv from "../listProv/ListProv";
//helpers
import {
  initialProvincia,
  initialDepartamento,
  initialLocalidad,
} from "./helpers";
//Types

import type {
  Departamento,
  DepartamentosResponse,
  Localidad,
  LocalidadesResponse,
  Provincia,
  ProvinciasResponse,
} from "../../types/typesgeoref";
import ListDep from "../listDep/ListDep";
import ListLoc from "../listLoc/ListLoc";

const Home = () => {
  //estado prov
  const [selectedProv, setSelectedProv] = useState<Provincia>(initialProvincia);
  //estado departamentos
  const [selectedDep, setSelectedDep] =
    useState<Departamento>(initialDepartamento);
  //estado localidades
  const [selectedLoc, setSelectedLoc] = useState<Localidad>(initialLocalidad);
  //estado array localidades
  const [listLoc, setListLoc] = useState<Localidad[]>([]);

  //get api provincias
  const apiProvincias = "https://apis.datos.gob.ar/georef/api/provincias";
  const { data: dataProv } = useFetch<ProvinciasResponse>(apiProvincias);

  //get api departamentos
  const shouldFetchDepartamentos = selectedProv.id !== "0";
  const apiDepartamentos = shouldFetchDepartamentos
    ? `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${selectedProv.id}&max=100`
    : "";
  const { data: dataDep } = useFetch<DepartamentosResponse>(apiDepartamentos);
  //get api localidades
  const shouldFetchLocalidades = selectedDep.id !== "0";
  const apiLocalidades = shouldFetchLocalidades
    ? `https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProv.id}&departamento=${selectedDep.id}&max=100`
    : "";
  let { data: dataLoc } = useFetch<LocalidadesResponse>(apiLocalidades);

  //
  useEffect(() => {
    if (dataLoc?.localidades) {
      setListLoc(dataLoc.localidades);
    } else {
      setListLoc([]);
    }
  }, [dataLoc]);
  //
  useEffect(() => {
    setListLoc([]);
    setSelectedLoc(initialLocalidad);
    setSelectedDep(initialDepartamento);
  }, [selectedProv]);

  console.log(dataLoc);

  return (
    <div className={style.conteiner}>
      <ListProv
        selectedProv={selectedProv}
        setSelectedProv={setSelectedProv}
        provincias={dataProv?.provincias ?? []}
      />
      {listLoc.length ? (
        <div className={style["fade-in"]}>
          <ListLoc
            key={selectedProv.id}
            nameProv={selectedProv.nombre}
            nameDep={selectedDep.nombre}
            selectedLoc={selectedLoc}
            setSelectedLoc={setSelectedLoc}
            localidades={dataLoc?.localidades ?? []}
          />
        </div>
      ) : (
        <div className={style["fade-in"]}>
          <ListDep
            //fuerza nuevo render cuando selectedProv actualiza
            key={selectedProv.id}
            //
            nameProv={selectedProv.nombre}
            selectedDep={selectedDep}
            setSelectedDep={setSelectedDep}
            departamentos={dataDep?.departamentos ?? []}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
