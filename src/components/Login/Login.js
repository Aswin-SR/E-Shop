import './Login.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, FormControl, TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import Avatar from '@mui/material/Avatar';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#3f51b5',
      contrastText: '#fff',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  right: '50%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="neutral">
        <Toolbar>
          <ShoppingCartIcon>
          </ShoppingCartIcon>
          <Typography variant="h6"
            noWrap
            component="div"
            sx={{ position: 'relative', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            upGrad E-Shop
          </Typography>
          <Link to='/Login'><Button
            upperCase={false}
            sx={{ color: 'white', textDecoration: 'underline', textTransform: 'none' }}>
            Login </Button></Link>
            <Link to='/SignUp'><Button
            upperCase={false}
            sx={{ color: 'white', textDecoration: 'underline', textTransform: 'none' }}>
            Sign Up </Button></Link>
        </Toolbar>
      </AppBar>
      <Grid container minHeight={'20vh'} />
      <Grid container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: 'transparent' }}>
        <Avatar sx={{ backgroundColor: '#f50057' }}>
          <LockTwoToneIcon sx={{ color: 'white', backgroundColor: '#f50057' }} />
        </Avatar>
        <Typography sx={{ position: 'relative', fontSize: 20 }}>Sign in</Typography>
      </Grid>
      <Grid container minHeight={'4vh'} />
      <Grid container xs={12} >
          <FormControl  sx={{ m: 1, width: '25%',paddingLeft:'37%'}}>
            <TextField required id="outlined-required" label="Email Address" />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25%',paddingLeft:'37%'}}>
            <TextField required id="outlined-required" label="Password" />
          </FormControl>
          <Grid item sx={{minHeight:'9vh'}}/>
          <FormControl sx={{ m: 1, width: '25%',paddingLeft:'37%'}}>
            <Button sx={{backgroundColor:'#3f51b5', color:'white'}}>
              SIGN IN
            </Button>
          </FormControl>
          <Grid item xs={12}/>
          <FormControl sx={{ m: 1, width: '25%', paddingLeft:'36.5%'}}>
          <Link to='/SignUp'><Button sx={{backgroundColor:'white', color:'Blue', textDecoration: 'underline', textTransform: 'none' }}>
              Don't have an account? Sign Up
            </Button></Link>
          </FormControl>
          <Grid item xs={12} sx={{minHeight:'10vh'}}/>
          <Typography paddingLeft={'45%'} color='grey'>
          Copyright &#169; <a href="https://www.upgrad.com/">upGrad</a> 2021.
          </Typography>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
