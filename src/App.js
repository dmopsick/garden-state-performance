import './App.css';
import Router from "./Router";
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

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


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
