import { makeStyles } from '@mui/material/styles';
import Logo from '../logo.svg';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';



const useStyles = makeStyles(theme => ({

    navBar: {
        background: "#000000",
        paddingLeft: "0px"
    }

}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navBar}>
            <Toolbar>
                <a href ="/">
                    <IconButton
                        edge="start"
                        aria-label="home"
                        style={{
                            marginRight: "10px"
                        }}
                    >
                    <img style={{height: "55px", width: "55px"}} src={Logo} />
                    </IconButton>
                </a>
                <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
                    Garden State Performance
                </Typography>
             </Toolbar>
        </AppBar>
    )
}
