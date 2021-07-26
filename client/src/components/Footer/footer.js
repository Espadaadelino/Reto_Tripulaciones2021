import React from 'react';
/* import { makeStyles } from '@material-ui/core/styles'; */
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { Link } from 'react-router-dom';

/* const useStyles = makeStyles({
  root: {
    width: 500,
  },
}); */

export default function SimpleBottomNavigation() {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    showLabels
    //className={classes.root}
    >
      <BottomNavigationAction component={Link} to='/' label="Home" icon={<RestoreIcon />} />
      <BottomNavigationAction component={Link} to='/explora' label="Explora" icon={<SearchOutlinedIcon />} />
      <BottomNavigationAction component={Link} to='/rutas' label="Ruta" icon={<ExploreOutlinedIcon />} />
      <BottomNavigationAction component={Link} to='/actividades' label="Actividad" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}