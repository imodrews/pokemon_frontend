import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core"
import { VideogameAsset } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles"

const navLinks = [
    { title: `About Us`, path: `/about`},
    { title: `More Pokemon`, path: `/pokemon`}
]

const useStyles = makeStyles({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    appBar: {
        background: `#008393`
    }
});




const NavBar = () => {

const classes = useStyles();

return(
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
         <Container className={classes.navbarDisplayFlex}>
            <a href="/" className={classes.linkText}>
            <IconButton edge="start" color="inherit" aria-label="game">
                <VideogameAsset fontSize="large" />
            </IconButton>
            </a>
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path}) =>(
                        <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                        </a>
            ))}
                </List>
         </Container>
        </Toolbar>
    </AppBar>


    )}
// can take out maxWidth="md" to change how the icons line up
//<AppBar style={{ background: '#2E3B55' }}>
export default NavBar;