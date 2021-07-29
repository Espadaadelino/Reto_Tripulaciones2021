import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
/* import Routing from "./RoutingMachine"; */
/* import Search from "react-leaflet-search"; */
import axios from "axios";
import {icon, markerIcon} from "./obstaculosicon";
import './LeafletMap.css'
/* import obsimg from '../../img/obstaculo.svg' */

export default class LeafletMap extends Component {
  state = {
    lat: 41.3918655408,
    lng: 2.1806167492,
    zoom: 80,
    isMapInit: true,
    coor: [],
    obstaculos: [],
  };
  /* saveMap = (map) => {
    this.map = map;
    this.setState({ isMapInit: true });
  };
 */
  renderMarkers =() =>{
    return this.state.obstaculos.map((elemento) =>{
       return <Marker key={elemento} icon={icon} position={elemento}/>     

     
     
      
    })
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/rutas").then((res) => {
      console.log(res.data.rutaFinal);
      const coorArray = res.data.rutaFinal.map((elemento) => {
        return elemento.coor;
      });
      this.setState({ coor: coorArray });
    });

    axios.get("http://localhost:5000/api/obstaculos").then((res) => {
      /* console.log(res); */
      console.log(res.data.obstaculosFinal);
      const obstaculosArray = res.data.obstaculosFinal.map((elemento) => {
        return elemento.coor;
      });
      this.setState({ obstaculos: obstaculosArray });
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <MapContainer
        className="mapSize"
        center={position}
        zoom={this.state.zoom}
        /* ref={this.saveMap} */
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {/*  {this.state.isMapInit && <Routing map={this.map} />} */}

        {/* <Search
          position="topleft"
          inputPlaceholder="Search your location"
          onChange={(info) => {
            // setCoordinates(info.latLng);
          }}
          showMarker={false}
          //zoom={5}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
        ></Search> */}

        <Marker position={position} icon={markerIcon}>
          <Popup>
            Estamos aquí
            <br /> Easily customizable.
          </Popup>
        </Marker>
        {this.state.coor.length !== 0 ? (
          <Polyline positions={this.state.coor} />
        ) : (
          ""
        )}
         {this.state.obstaculos.length !== 0 ? (
          this.renderMarkers() 
        ) : (
          ""
        )} 
        <img src='../../img/obstaculo.svg' alt="" />
      </MapContainer>
    );
  }
}

