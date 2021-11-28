import {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from './Navbar.style'
import { useTheme } from '@material-ui/core/styles';
import {ColorModeContext} from '../../pages/_app'
import { grey } from '@mui/material/colors';


export default function NavBar() {
  const theme = useTheme();
  const {palette: {mode}} = theme;
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <AppBar position="static" sx={{
      bgcolor: mode === "dark" ? grey[900] : grey[50],
      color: mode === "dark" ? grey[50] : grey[900]
    }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', p: 3 } }}
          >
            Movies
          </Typography>
          <Search bgColor={{bgcolor: mode === "light" ? grey[900] : "inherit"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={colorMode.toggleColorMode}
                  checked={theme.palette.mode === "dark"}
                  aria-label="login switch"
                />
              }
              label={theme.palette.mode}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}