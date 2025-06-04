import type {
  Departamento,
  Localidad,
  Provincia,
} from "../../types/typesgeoref";

export const initialProvincia: Provincia = {
  id: "0",
  nombre: "",
  centroide: { lat: "", lon: "" },
};

export const initialDepartamento: Departamento = {
  id: "0",
  nombre: "",
  centroide: { lat: "", lon: "" },
};

export const initialLocalidad: Localidad = {
  id: "",
  categoria: "",
  centroide: { lat: "", lon: "" },
  departamento: { id: "", nombre: "" },
  municipio: "",
  nombre: "",
};
