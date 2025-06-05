import type {
  Centroide,
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
  centroide: undefined,
};

export const initialLocalidad: Localidad = {
  id: "",
  categoria: "",
  centroide: { lat: "", lon: "" },
  departamento: { id: "", nombre: "" },
  municipio: "",
  nombre: "",
};
export function centroideToCoords(
  centroide?: Centroide
): [number, number] | null {
  console.log(centroide);
  if (
    !centroide ||
    isNaN(Number(centroide.lat)) ||
    isNaN(Number(centroide.lon))
  ) {
    return null;
  }

  return [parseFloat(centroide.lat), parseFloat(centroide.lon)];
}
