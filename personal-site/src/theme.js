import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    background: {
      default: '#121212', // dark grey background (you can adjust)
    },
    text: {
      primary: '#ffffff', // white text
      secondary: '#bbbbbb', // optional: softer secondary text
    },
})

export default theme