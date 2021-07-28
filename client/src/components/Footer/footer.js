import React from 'react';
<<<<<<< HEAD
import {makeStyles} from '@material-ui/core/styles';
=======
/* import { makeStyles } from '@material-ui/core/styles'; */
>>>>>>> f9cac749ba9982377537aab17ebabcdd6ef469f2
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import {Link} from 'react-router-dom';
import './footer.css'

<<<<<<< HEAD
const useStyles = makeStyles({
    root: {
        width: 500
    }
});
=======
/* const useStyles = makeStyles({
  root: {
    width: 500,
  },
}); */
>>>>>>> f9cac749ba9982377537aab17ebabcdd6ef469f2

export default function SimpleBottomNavigation() { // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className="footer">
            <BottomNavigation value={value}
                onChange={
                    (event, newValue) => {
                        setValue(newValue);
                    }
                }
                showLabels
                //className={classes.root}
            >
                <BottomNavigationAction component={Link}
                    to='/'
                    label="Home"
                    icon={<RestoreIcon/>}/>
                <BottomNavigationAction component={Link}
                    to='/explora'
                    label="Explora"
                    icon={<SearchOutlinedIcon/>}/>
                <BottomNavigationAction component={Link}
                    to='/rutas'
                    label="Ruta"
                    icon={<ExploreOutlinedIcon/>}/>
                <BottomNavigationAction component={Link}
                    to='/actividades'
                    label="Actividad"
                    icon={<LocationOnIcon/>}/>
            </BottomNavigation>
        </div>
    );
}
