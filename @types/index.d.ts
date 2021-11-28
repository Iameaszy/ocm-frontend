import {
  Palette,
  PaletteOptions
} from "@material-ui/core/styles/createPalette";


declare module '@mui/material/styles' {
  interface Palette {
    contrastThreshold: number;
    tonalOffset: number;
    mode?:string;
  }

  interface PaletteOptions {
    contrastThreshold?: number;
    tonalOffset?: number;
    mode?: string
  }
}