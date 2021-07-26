import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import axios from "axios";

class Routing extends MapLayer {
  /* hacer fetch axios get a http://localhost:5000/api/rutas */
  /* almacenar respuesta en el componente routing  con this.state*/
  /*  en vez de localizar la ruta a traves el input value hacerlo a traves del link de rutas en el componente Footer y que ya pinte la ruta directamente*/
  /* ruta del Arco del Triunfo a la playa de la Barceloneta */
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }
  getRoutes = async (res) => {
    await axios.get("/api/rutas")
    .then((res) => res.json());
    console.log(res)
    .then((res) => this.state.response);
  };

  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(40.420625, -3.692291)
      
      
      ],
      language: "es",

      show: false,
      collapsible: true,
    }).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
