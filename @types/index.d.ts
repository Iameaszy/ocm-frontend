import {
  Palette,
  PaletteOptions
} from "@material-ui/core/styles/createPalette";


declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    mode?: string;
  }

  interface PaletteOptions {
    mode?: string
  }
}
