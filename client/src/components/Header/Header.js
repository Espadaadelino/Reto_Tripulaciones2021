import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import MuseumIcon from '@material-ui/icons/Museum';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import './Header.css'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(12)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));


export default function FloatingActionButtonSize() {
    const classes = useStyles();

    return (
        <div class="btn">


            <AliceCarousel disableDotsControls disableButtonsControls
                autoWidth={true}>


                <Fab variant="extended" color="" aria-label="add"
                    className={
                        classes.margin
                }>
                    <BeachAccessIcon className={
                        classes.extendedIcon
                    }/>
                    Playas
                </Fab>
                <Fab variant="extended" color="" aria-label="add"
                    className={
                        classes.margin
                }>
                    <MuseumIcon className={
                        classes.extendedIcon
                    }/>
                    Museos
                </Fab>
                <Fab variant="extended" color="" aria-label="add"
                    className={
                        classes.margin
                }>
                    <AccountBalanceIcon className={
                        classes.extendedIcon
                    }/>
                    Monumentos
                </Fab>

                <Fab variant="extended" color="" aria-label="add"
                    className={
                        classes.margin
                }>
                    <RestaurantIcon className={
                        classes.extendedIcon
                    }/>
                    Restaurantes
                </Fab>

            </AliceCarousel>


        </div>
    );
}
