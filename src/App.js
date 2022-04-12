import logo from './logo.svg';
import './App.css';
import Router from "./Router";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import navBarLogo from './logo1200.png';
import { makeStyles } from "@material-ui/styles";

const theme = createTheme({
  pallete: {
    primary : {
      main: "#000000"
    },
    secondary: {
      main: "#ea1c2d"
    }
  }
});

const useStyles = makeStyles(theme => ({

  navBar: {
    background: "#000000",
    paddingLeft: "0px"
  },

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar className={classes.navBar}>
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <img style={{height: "55px", width: "55px"}} src={logo} />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
              Garden State Performance
            </Typography>
          </Toolbar>
        </AppBar>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
