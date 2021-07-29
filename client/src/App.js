import React from "react";
import {BrowserRouter} from 'react-router-dom'
/* import Grid from '@material-ui/core/Grid'; */
import Main from './components/Main/Main'
import Footer from "./components/Footer/footer"
/* import Header from "./components/Header/Header" */
 /* import LeafletMap from "./components/Maps/LeafletMap"; */

function App() {
    return (
        <div> {/* <Grid container spacing={3}> */}
            <BrowserRouter>
                <Main/>
                <Footer/>
            </BrowserRouter>
            {/* </Grid> */} </div>
    );
}

export default App;
