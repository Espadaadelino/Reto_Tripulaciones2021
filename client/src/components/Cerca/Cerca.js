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
import "./Cerca.css"

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
                    image="https://static-resources.mirai.com/wp-content/uploads/sites/1745/20210603081005/esta-Las-Ramblas-de-Barcelona-.jpg"/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Las Ramblas</h3>

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
                    image="https://lh3.googleusercontent.com/proxy/5de0K0rbvomm-e7SME7cpipFjnzKV9Fi2D-F920SPhQcvr8XV9hpSCdQAra_xG6LmjNKp7bDu9i-EwopwzkAw9vYR7vfA4cmHPpgHUvZQu4h-V2JccgT7cbhspdsVlGJhSl04nczW05KdWYDmuDQKnwaYbOeLlB-"/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Parque Güell</h3>


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
                    image="https://i2.bssl.es/bcnhoy/2010/09/boqueria2.jpg"/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Mercado de la Boquería</h3>

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
