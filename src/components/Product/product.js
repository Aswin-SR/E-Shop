import './product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { json, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Tab, MenuItem, TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import datas from '../../assets/assestinfo.json'
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FormControl } from '@mui/material';
import {useParams} from "react-router-dom";

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
        width: '320px',
        [theme.breakpoints.up('sm')]: {
            width: '320px',
            '&:focus': {
                width: '320px',
            },
        },
    },
}));

function Product() {
    const {id} = useParams();

    let data = datas.Products;
    
    let actualdata = data.filter((dat)=>{
        if (dat.id == id)
            return true;
        else
            return false;
    });

    let filter1data = data;
    let filter2data = data;
    let filter3data = data;

    const [alignment, setAlignment] = React.useState('all');
    const [filter, setfilter] = React.useState('Default');
    const [filtereddata, setfiltereddata] = React.useState(data);
    const [input, setinput] = React.useState("");

    const inputhandleChange = (event) => {
        setinput(event.target.value);
        filterchange(alignment,filter,event.target.value);
    };

    const filterhandleChange = (event, newfilter) => {
        setfilter(newfilter.props.value);
        filterchange(alignment,newfilter.props.value,input);
    };

    const togglehandleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      filterchange(newAlignment,filter,input);
    };
    
    const filterchange = (newAlignment,newfilter,input) => {
        filter3data = data.filter((dat)=>{
            if (input.toLowerCase() =="")
                return(true);
            else if (dat.product_desc.toLowerCase().includes(input.toLowerCase()))
                return(true);
            else
                return(false);
        });
        filter2data = filter3data.filter((dat)=> {
            if (newAlignment == "all")
                {return(true);}
            else if (newAlignment == dat.product_type)
                {return(true);}
            else
                {return(false);}
          });
        if (newfilter == 'Price: Low to High')
            filter1data = filter2data.sort(
                function(a,b){return (a.product_price - b.product_price)}
            );
        else if (newfilter == 'Price: High to Low')
            filter1data = filter2data.sort(
                function(a,b){return (b.product_price - a.product_price)}
            );
        else if (newfilter == 'Newest')
            filter1data = filter2data.sort(
                function(a,b){return (a.time_added < b.time_added)}
            );
        else 
            filter1data = filter2data.sort(
                function(a,b){return (a.id - b.id)}
            );
        console.log(newfilter,newAlignment,filter1data);
        setfiltereddata(filter1data);
    };

    const children = [
      <ToggleButton value="all" key="all">
        <Typography>ALL</Typography>
      </ToggleButton>,
      <ToggleButton value="Apparel" key="Apparel">
        <Typography>APPAREL</Typography>
      </ToggleButton>,
      <ToggleButton value="Electronics" key="Electronics">
        <Typography>ELECTRONICS</Typography>
      </ToggleButton>,
      <ToggleButton value="Footwear" key="Footwear">
        <Typography>FOOTWEAR</Typography>
      </ToggleButton>,
      <ToggleButton value="Personal Care" key="Personal Care">
      <Typography>PERSONAL CARE</Typography>
    </ToggleButton>,
    ];
  
    const control = {
      value: alignment,
      onChange: togglehandleChange,
      exclusive: true,
    };

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
                    <Search sx={{ position: 'relative'}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase onChange={inputhandleChange}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Link to='/Home'><Button
                        upperCase={false}
                        sx={{ color: 'white', textDecoration: 'underline', textTransform: 'none' }}>
                        Home </Button></Link>
                    <Link to='/Addproduct'><Button
                        upperCase={false}
                        sx={{ color: 'white', textDecoration: 'underline', textTransform: 'none' }}>
                        Add Product </Button></Link>
                    <Link to='/Logout'><Button
                        upperCase={false}
                        sx={{ color: 'white', backgroundColor: '#f50057', '&:hover': { backgroundColor: '#f50000' } }}>
                        Logout </Button></Link>
                </Toolbar>
            </AppBar>
            <Grid minHeight={'20px'}></Grid>
            <Stack spacing ={3} alignItems="center">
                <ToggleButtonGroup {...control}>
                    {children}
                </ToggleButtonGroup>
            </Stack>
 
            <Grid container xs={12}>
                <Grid item xs={12} minHeight='15vh' ></Grid>
                <Grid item xs={3}/>
                <Grid item xs={3} md={3}>
                    <img src={'../'+actualdata.at(0).product_link} alt={actualdata.at(0).product_sub}/>
                </Grid>
                <Grid item>
                    <Typography justifyContent={'center'} fontSize={28} width={'400px'}>{actualdata.at(0).product_sub} <span style={{fontSize:16,display:'inline-block', width:'200px',color:'white', backgroundColor: '#3f51b5', borderTopLeftRadius:'25px', borderBottomLeftRadius:'25px' , borderTopRightRadius:'25px', borderBottomRightRadius:'25px',paddingTop:2, paddingBottom:2, paddingLeft:13, paddingRight:6}}>Available Quantity : {actualdata.at(0).available_quan}</span></Typography>
                    <Typography paddingTop={2} fontSize={15}>Category: <span style={{fontWeight:'bold'}}>{actualdata.at(0).product_type}</span></Typography> 
                    <Typography paddingTop={2} fontStyle={'oblique'} fontSize={15}>{actualdata.at(0).product_desc}</Typography>
                    <Typography paddingTop={2} fontSize={24} color={'red'}><ascii>&#8377;</ascii> {actualdata.at(0).product_price}</Typography>
                    <FormControl  sx={{ m: 1, width: '80%',paddingTop:1, paddingBottom:1}}>
                        <TextField required id="outlined-required" label="Enter Quantity" />
                    </FormControl>
                    <Link to={'/Products/'+id+'/Orders'}><Button sx={{color: 'white', backgroundColor: '#3f51b5', '&:hover': {backgroundColor: '#3f56ff'}}}>
                        Place Order
                    </Button></Link>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ minHeight: '30vh' }} />
            <Grid container xs={12} sx={{ minHeight: '10vh' }}>
                <Typography paddingLeft={'45%'} color='grey'>
                    Copyright &#169; <a href="https://www.upgrad.com/">upGrad</a> 2021.
                </Typography>
            </Grid>
        </ThemeProvider >
    );
}

export default Product;
