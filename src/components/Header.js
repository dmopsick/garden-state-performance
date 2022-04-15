import { makeStyles } from '@mui/styles';
import Logo from '../logo.svg';
import { AppBar, Toolbar, IconButton, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const useStyles = makeStyles(theme => ({

    navBar: {
        background: "#000000",
        paddingRight: "0px !important",
        height: "80px",
        color: "white"
    },

    header: {
        fontFamily: "Bebas Neue !important",
        fontWeight: "bold !important",
        fontSize: "28px"
    }

}));

export default function Header(props) {
    const classes = useStyles();

    return (
     
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={classes.navBar}>
                        <a href ="/">
                            <IconButton
                                edge="start"
                                aria-label="home"
                                style={{
                                    marginRight: "5px"
                                }}
                            >
                            <img 
                                style={{
                                    height: "55px", 
                                    width: "55px"}} 
                                src={Logo}
                                alt="Garden State Performance Logo" />
                            </IconButton>
                            <div className={classes.header}>
                                Garden State Performance
                             </div>
                        </a>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </React.Fragment>
    

    )
}

export function HideOnScroll(props) {
    const {children} = props;
    
    const trigger = useScrollTrigger({
        target: window
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
