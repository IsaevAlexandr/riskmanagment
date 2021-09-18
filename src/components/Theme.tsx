
import { createMuiTheme, responsiveFontSizes } from "@mui/material";

export const Theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: "#097dea", // blue
        // main: '#000080', // Крутой синий цвет! Попробовать с темной темой
        // main: '#a3de83', // awesome green
      },
      secondary: {
        main: "#e43f5a", // red
        // main: '#f0d43a',
        // main: '#f0d43a',
        // main: '#ff9a00',
      },
      // background: {
      // paper: '#fff',
      // default: '#dde7f2',
      // default: '#e9ecef',
      // },
      // background: {
      //   paper: '#7a7a7a',
      //   default: '#696969',
      // },

      // text: {
      // primary: string;
      // secondary: string;
      // disabled: string;
      // hint: string;
      // },
    },
    typography: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji",
      //   h4: {
      //     fontWeight: 700,
      //   },
      //   h5: {
      //     fontWeight: 700,
      //   },
      //   h6: {
      //     fontWeight: 700,
    },
  })
  // overrides: {
  //   MuiCardHeader: {
  //     title: {
  //       fontSize: '16px',
  //     },
  //     subheader: {
  //       fontSize: '14px',
  //     },
  //   },
  // },
  // props: {
  //   MuiTab: {
  //     style: {
  //       minWidth: '50px',
  //     },
  //   },
  //   MuiTextField: {
  //     margin: 'normal',
  //   },
  //   MuiFormControl: {
  //     margin: 'normal',
  //   },
  // },
);
