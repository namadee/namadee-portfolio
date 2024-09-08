import { AppBar, MenuItem, Typography, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png"


const Header = () => {
    const routes = [
       { name:'HOME',path: '/'}, {name:'PROJECTS', path: '/projects'}, {name:'ABOUT', path:'/about'}];
    
    return (
    <>
    <AppBar position="fixed" color="primary.main" elevation={0} sx={{mt:1, mr:1}}> 
        
        <Box sx={{ display:'flex', justifyContent:'space-between'}}>
        <Box sx={{ display:'flex'}}>
            <MenuItem>
             <Box component='img' width='2rem' src={logo}/>
            </MenuItem>
            <MenuItem>
            <Typography variant="h3">NAMADEE KAHATAPITIYA</Typography>
            </MenuItem>
        </Box>
       
        <Box sx={{ display:'flex'}}>
            {routes.map((route,i) => {
                return(
                    
                    <MenuItem key={i} sx={{zIndex:0}}>
                        <Typography variant="h3">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={route.path}>{route.name}</Link>
                        </Typography>
                    </MenuItem>        
                )
            })}  
            </Box> 
        </Box> 

    </AppBar>
   
    <Outlet/>
    </>
    )
}

export default Header;