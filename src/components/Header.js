import { makeStyles } from '@mui/styles';
import Logo from '../logo.svg';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const useStyles = makeStyles(theme => ({

    navBar: {
        background: "#000000",
        paddingLeft: "0px",
        height: "80px"
    },

    header: {
        fontFamily: "Bebas Neue !important",
        fontWeight: "bold !important"
    }

}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar >
            <Toolbar className={classes.navBar}>
                <a href ="/">
                    <IconButton
                        edge="start"
                        aria-label="home"
                        style={{
                            marginRight: "10px"
                        }}
                    >
                    <img 
                        style={{
                            height: "55px", 
                            width: "55px"}} 
                        src={Logo}
                        alt="Garden State Performance Logo" />
                    </IconButton>
                </a>
                <Typography className={classes.header} variant="h4" component="div" sx={{ flexGrow: 2 }}>
                    Garden State Performance
                </Typography>
             </Toolbar>
        </AppBar>
    )
}
