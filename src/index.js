import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D1D2B',
      contrastText: 'white',
    },
    secondary: {
      main: '#28AEF2',
      contrastText: 'white',
    }
  },
  typography: {
    body2: "Bebas Neue",
    fontFamily: "poppins"
  },
  shape: {
    borderRadius: 30
  },
  spacing: 100,
  overrides: {
    MuiButton: {
      root: { textTransform: 'none', padding: '.8rem 4rem', fontSize: '16px' }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: 'contained',
      color: 'secondary',
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
