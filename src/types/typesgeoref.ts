export interface Centroide {
  lat: string;
  lon: string;
}
export interface Provincia {
  id: string;
  nombre: string;
  centroide?: Centroide;
}
export interface ProvinciasResponse {
  parametros: object;
  provincias: Provincia[];
  total: number;
  centroide: Centroide;
}
interface Parametros {
  max: number;
  provincia: string;
}
export interface DepartamentosResponse {
  departamentos: Departamento[];
  parametros: Parametros;
  centroide: Centroide;
}
export interface Departamento {
  id: string;
  nombre: string;
  centroide?: Centroide;
}
export interface Localidad {
  id: string;
  categoria: string;
  centroide: Centroide;
  departamento: Departamento;
  municipio: string;

  nombre: string;
}
export interface LocalidadesResponse {
  cantidad: number;
  localidades: Localidad[];
}
