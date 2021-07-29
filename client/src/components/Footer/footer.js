import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

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
      <BottomNavigationAction id="btnHome" component={Link} to='/'  icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction id="btnExplore" component={Link} to='/explora'  icon={<SearchOutlinedIcon />} />
      <BottomNavigationAction id="btnRoute" component={Link} to='/rutas' icon={<EditOutlinedIcon />} />
      <BottomNavigationAction id="btnActivities" component={Link} to='/actividades' icon={<PersonIcon/>} />
    </BottomNavigation>
  );
}