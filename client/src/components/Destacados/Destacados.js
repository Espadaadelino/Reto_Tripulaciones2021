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
        maxWidth: 50
    },
    media: {
        height: 20,
        paddingTop: "8%" // 16:9
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (


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
                        <h3>La Sagrada Familia</h3>

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
                        <h3>Playa de la Barceloneta</h3>


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
                        <h3>El Arco del Triunfo</h3>

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


    );
}
