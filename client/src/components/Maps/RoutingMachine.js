import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import axios from "axios";

class Routing extends MapLayer {
  
  /* ruta del Arco del Triunfo a la playa de la Barceloneta */
/*   var control = L.Routing.control({
    waypoints: [
      L.latLng(-44.004358, 170.476709),
      L.latLng(-43.985844, 170.464058)
  ],
    waypointMode: 'snap',
    
    formatter: new L.Routing.Mapzen.Formatter()
  }).addTo(map); */


  

  createLeafletElement(waypoints) {
    const { map } = this.props;
    console.log(waypoints)
    L.polyline(waypoints).addTo(map)
    /* let leafletElement = L.Routing.control({
      waypoints: waypoints,
      language: "es",

      show: false,
      collapsible: true,
      
    }).addTo(map.leafletElement); */

   /*  return leafletElement.getPlan(); */
  }
  componentDidMount (){
    
    axios.get("http://localhost:5000/api/rutas")
   .then((res) => {
     /* console.log(res.data.rutaFinal) */
     this.createLeafletElement(res.data.rutaFinal.map((waypoint)=>L.latLng(waypoint.coor)).slice(0 , 3))


   } );
   
 

}
}
export default withLeaflet(Routing);
