import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
/* import Routing from "./RoutingMachine"; */
import Search from "react-leaflet-search";
import axios from "axios";
/* import L from "leaflet"; */



export default class LeafletMap extends Component {
  state = {
    lat: 41.3918655408,
    lng: 2.1806167492,
    zoom: 80,
    isMapInit: true,
    coor:[]
  };
  saveMap = (map) => {
    this.map = map;
    this.setState({ isMapInit: true });
  };
  componentDidMount (){
    
    axios.get("http://localhost:5000/api/rutas")
   .then((res) => {
     console.log(res.data.rutaFinal)
     const coorArray = res.data.rutaFinal.map((elemento)=>{
         return elemento.coor

     })
     this.setState({coor:coorArray})



   } );
   
 

}

  render() {
    const position = [this.state.lat, this.state.lng]; 
   
    return (
      <Map
        className="mapSize"
        center={position}
        zoom={this.state.zoom}
        ref={this.saveMap}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
       {/*  {this.state.isMapInit && <Routing map={this.map} />} */}

        <Search
          position="topleft"
          inputPlaceholder="Search your location"
          onChange={(info) => {
            // setCoordinates(info.latLng);
          }}
          showMarker={false}
          //zoom={5}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
        ></Search>

        <Marker position={position}>
          <Popup>
           Estamos aquí<br /> Easily customizable.
          </Popup>
        </Marker>
        {this.state.coor.length !== 0?<Polyline  positions={this.state.coor} />:""}
        
      </Map>
    );
  }
}
