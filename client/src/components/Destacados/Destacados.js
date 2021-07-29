import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AccessibleIcon from "@material-ui/icons/Accessible";
import Rating from "@material-ui/lab/Rating";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Destacados.css"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <div class="carousel">

            <AliceCarousel autoWidth={true}
                mouseTracking
                disableButtonsControls
                disableDotsControls>
                <Card>
                    <CardMedia className={
                            classes.media
                        }
                        image="https://media.timeout.com/images/105737732/image.jpg"/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h2>La Sagrada Familia</h2>
                            La Sagrada Familia, es una basílica católica de Barcelona (España),
                                                                                                                                                                                                                                                                                                                                                                            diseñada por el arquitecto Antoni Gaudí. Iniciada en 1882, todavía
                                                                                                                                                                                                                                                                                                                                                                            está en construcción.
                        </Typography>

                        <AccessibleIcon style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>
                        <Rating style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>

                    </CardContent>
                </Card>
                <Card>
                    <CardMedia className={
                            classes.media
                        }
                        image="https://v2r8c2i8.stackpathcdn.com/wp-content/uploads/2015/05/praiadebarcelonetaembarcelona.jpg"/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h2>Playa de la Barceloneta</h2>
                            Se encuentra en el barrio de La Barceloneta (Ciutat Vella). Junto
                                                                                                                                                                                                                                                                                                                                                                            con la barcelonesa playa de San Sebastián y la playa de la Victoria,
                                                                                                                                                                                                                                                                                                                                                                            es una de las más largas con una longitud de 1100 metros. Junto con
                                                                                                                                                                                                                                                                                                                                                                            la de San Sebastián (playa cercana) es una de las más antiguas y de
                                                                                                                                                                                                                                                                                                                                                                            mayor tradición de la ciudad y también una de las preferidas por los
                                                                                                                                                                                                                                                                                                                                                                            usuarios extranjeros.
                        </Typography>

                        <AccessibleIcon style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>
                        <Rating style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>

                    </CardContent>
                </Card>
                <Card>
                    <CardMedia className={
                            classes.media
                        }
                        image="https://upload.wikimedia.org/wikipedia/commons/3/3f/Arc_Triomf_31-10-13.JPG"/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h2>El Arco del Triunfo</h2>
                            Construido con motivo de la Exposición Universal de 1888, el Arco de
                                                                                                                                                                                                                                                                                                                                                                            Triunfo encabezaba el paseo que conducía hasta la entrada principal
                                                                                                                                                                                                                                                                                                                                                                            de la feria, en el parque de la Ciutadella, que se acababa de
                                                                                                                                                                                                                                                                                                                                                                            inaugurar. El monumento, de ladrillo rojo y de estilo neomudéjar,
                                                                                                                                                                                                                                                                                                                                                                            respondía al gusto por la ornamentación y el eclecticismo tan
                                                                                                                                                                                                                                                                                                                                                                            característico del modernismo catalán, en auge en aquellos años.
                        </Typography>

                        <AccessibleIcon style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>
                        <Rating style={
                            {
                                fontSize: 15,
                                color: "blue"
                            }
                        }/>

                    </CardContent>
                </Card>
            </AliceCarousel>
        </div>

    );
}
