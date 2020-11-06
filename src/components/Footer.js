import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
/* import { FacebookIcon, TwitterIcon, GitHubIcon } from "@material-ui/icons"; */
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    root: {
        width: `100%`,
        background: `#008393`
    },
    navColor: {
        background: `#008393`
    }
});



const Footer = () => {

const classes = useStyles();
const [value, setValue] = useState('recents');

const handleChange = (event, newValue) =>{
    setValue(newValue);
};



return (
<>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >   
      <BottomNavigationAction label="@group4WBS" value="facebook" icon={<FacebookIcon />} />
      <BottomNavigationAction label="@group4WBS" value="twitter" icon={<TwitterIcon />} />
      <BottomNavigationAction label="@group4WBS" value="github" icon={<GitHubIcon />} />
    </BottomNavigation>
</>

)}

export default Footer;