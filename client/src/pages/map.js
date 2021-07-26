import LeafletMap from "../components/Maps/LeafletMap";
import React from "react";
//import {BrowserRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
//import Footer from '../components/Footer/footer'

function Map() {
    return (
        <div >
            <Grid container spacing={2}>
                <LeafletMap/>
            </Grid>
        </div>
    );
}

    export default Map;