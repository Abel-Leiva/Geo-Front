//vendors
import { useEffect, useRef, useState } from "react";
import useFetch from "../../customHooks/UseFetch";

import ListProv from "../listProv/ListProv";
//helpers
import {
  initialProvincia,
  initialDepartamento,
  initialLocalidad,
  centroideToCoords,
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
import { useBottomModal } from "../../customHooks/useBottonModal";
import BottomModal from "../bottonModal/BottonModal";
import Maps from "../maps/Maps";

const Home = () => {
  //
  const depContainerRef = useRef<HTMLDivElement>(null);
  //Estado modal
  const modal = useBottomModal();
  //estado prov
  const [selectedProv, setSelectedProv] = useState<Provincia>(initialProvincia);
  //estado departamentos
  const [selectedDep, setSelectedDep] =
    useState<Departamento>(initialDepartamento);
  //estado localidades
  const [selectedLoc, setSelectedLoc] = useState<Localidad>(initialLocalidad);
  //estado array localidades
  const [listLoc, setListLoc] = useState<Localidad[]>([]);
  const [listDep, setListDep] = useState<Departamento[]>([]);

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

  useEffect(() => {
    if (dataDep?.departamentos?.length) setListDep(dataDep.departamentos);
    // Ejecutar scroll solo si hay departamentos o localidades para mostrar
    if (
      depContainerRef.current &&
      (dataDep?.departamentos?.length || dataLoc?.localidades?.length)
    ) {
      depContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [dataDep, dataLoc]);

  console.log("aca es", selectedDep);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto -mt-3">
        <h1 className="text-xl font-bold text-gray-800 mb-8 text-center">
          GeoFront Argentina
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 -mt-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <ListProv
              selectedProv={selectedProv}
              setSelectedProv={setSelectedProv}
              provincias={dataProv?.provincias ?? []}
            />
          </div>

          <div
            ref={depContainerRef}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {listLoc.length ? (
              <div className="animate-fade-in">
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
              <div className="animate-fade-in">
                <ListDep
                  key={selectedProv.id}
                  nameProv={selectedProv.nombre}
                  selectedDep={selectedDep}
                  setSelectedDep={setSelectedDep}
                  departamentos={dataDep?.departamentos ?? []}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {selectedProv.nombre != "" && (
          <button
            onClick={modal.open}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Ver Mapa
          </button>
        )}

        {modal.isOpen && centroideToCoords(selectedProv.centroide) && (
          <BottomModal onClose={modal.close}>
            <Maps
              provCoords={
                centroideToCoords(selectedProv.centroide)
                  ? {
                      coords: centroideToCoords(selectedProv.centroide)!,
                      nombre: selectedProv.nombre,
                    }
                  : null
              }
              depCoords={
                centroideToCoords(selectedDep.centroide)
                  ? {
                      coords: centroideToCoords(selectedDep.centroide)!,
                      nombre: selectedDep.nombre,
                    }
                  : null
              }
              listLocCoords={listLoc
                .filter((loc) => centroideToCoords(loc.centroide)) // evitar nulos
                .map((loc) => ({
                  coords: centroideToCoords(loc.centroide)!,
                  nombre: loc.nombre,
                }))}
              listDepCoords={listDep
                .filter((dep) => centroideToCoords(dep.centroide))
                .map((dep) => ({
                  coords: centroideToCoords(dep.centroide)!,
                  nombre: dep.nombre,
                }))}
            />
          </BottomModal>
        )}
      </div>
    </div>
  );
};

export default Home;
