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
/*   constructor() {
    super();
    this.state = {
      response: [],
    };
  } */


  

  createLeafletElement(waypoints) {
    const { map } = this.props;
    
    let leafletElement = L.Routing.control({
      waypoints: waypoints,
      language: "es",

      show: false,
      collapsible: true,
    }).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }
  componentDidMount (){
    
    axios.get("http://localhost:5000/api/rutas")
   /* .then((res) => res.json()); */ /* axios ya por defecto pasa la petición a json */
   .then((res) => {
     console.log(res.data.rutaFinal)
     this.createLeafletElement(res.data.rutaFinal.map((waypoint)=>L.latLng(waypoint.coor)))

   } );
   
 

}
}
export default withLeaflet(Routing);
