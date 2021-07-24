import {MapLayer} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import {withLeaflet} from "react-leaflet";


class Routing extends MapLayer {


    createLeafletElement() {
        const {map} = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [
                L.latLng(40.420625, -3.692291),
                L.latLng(40.3966428, -3.6822935),
                L.latLng(40.4146500, -3.7004000)
            ],
            language: 'es',

            show: false,
            collapsible: true


        }).addTo(map.leafletElement);


        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);
