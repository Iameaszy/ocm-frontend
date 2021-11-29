import {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase, ThemeSwitcherWrapper} from './Navbar.style'
import { useTheme } from '@material-ui/core/styles';
import {ColorModeContext} from '../../pages/_app'
import { grey } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'


export default function NavBar() {
  const theme = useTheme();
  const {palette: {mode}} = theme;
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <AppBar position="static" sx={{
      bgcolor: mode === "dark" ? grey[900] : grey[50],
      color: mode === "dark" ? grey[50] : grey[900],
      flexGrow: 1
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ThemeSwitcherWrapper>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </ThemeSwitcherWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}