import { makeStyles } from '@mui/styles';
import Logo from '../logo.svg';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const useStyles = makeStyles(theme => ({

    navBar: {
        background: "#000000",
        paddingLeft: "0px",
        height: "80px"
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
                    >
                    <img 
                        style={{
                            height: "55px", 
                            width: "55px"}} 
                        src={Logo}
                        alt="Garden State Performance Logo" />
                    </IconButton>
                </a>
                <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                    Garden State Performance
                </Typography>
             </Toolbar>
        </AppBar>
    )
}
