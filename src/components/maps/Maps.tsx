import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//
const iconProvincia = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [45, 61],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const iconDepartamento = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const iconLocalidad = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
//types
type CoordenadaConNombre = {
  coords: [number, number];
  nombre: string;
};
type MapsProps = {
  provCoords: CoordenadaConNombre | null;
  depCoords?: CoordenadaConNombre | null;
  listDepCoords?: CoordenadaConNombre[] | null;
  listLocCoords?: CoordenadaConNombre[] | null;
};

//
const Maps = ({
  provCoords,
  depCoords,
  listDepCoords,
  listLocCoords,
}: MapsProps) => {
  console.log(provCoords);
  return (
    <MapContainer
      center={depCoords != null ? depCoords.coords : provCoords?.coords} // Buenos Aires
      zoom={depCoords != null ? 10 : 6}
      style={{ height: "85vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {provCoords != null && (
        <Marker position={provCoords.coords} icon={iconProvincia}>
          <Popup>{provCoords.nombre}</Popup>
        </Marker>
      )}

      {depCoords == null &&
        provCoords != null &&
        listDepCoords?.map((dep, index) => (
          <Marker key={index} position={dep.coords} icon={iconDepartamento}>
            <Popup>{dep.nombre}</Popup>
          </Marker>
        ))}

      {depCoords != null && (
        <Marker position={depCoords.coords} icon={iconDepartamento}>
          <Popup>{depCoords.nombre}</Popup>
        </Marker>
      )}

      {listLocCoords?.map((loc, index) => (
        <Marker key={index} position={loc.coords} icon={iconLocalidad}>
          <Popup>{loc.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
