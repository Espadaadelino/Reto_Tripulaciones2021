import React, {Component} from "react";
import {Map, TileLayer} from "react-leaflet";
import Routing from "./RoutingMachine";
import Search from "react-leaflet-search";

export default class LeafletMap extends Component {
    state = {
        lat: 40.4167,
        lng: -3.70325,
        zoom: 80,
        isMapInit: false
    };
    saveMap = map => {
        this.map = map;
        this.setState({isMapInit: true});
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (<Map className="mapSize" center={position}
            zoom={
                this.state.zoom
            }
            ref={
                this.saveMap
        }>

            <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/> {
            this.state.isMapInit && <Routing map={
                this.map
            }/>
        }

            <Search position="topleft" inputPlaceholder="Search your location"
                onChange={
                    (info) => { // setCoordinates(info.latLng);
                    }
                }
                showMarker={false}
                //zoom={5}
                closeResultsOnClick={true}
                openSearchOnLoad={true}></Search>
    </Map>);
    }
}
