import { AppBar, MenuItem, Typography, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";


const Header = () => {
    const routes = [
       { name:'HOME',path: '/'}, {name:'PROJECTS', path: '/projects'}, {name:'ABOUT', path:'/about'}];
    
    return (
    <>
    <AppBar position="fixed" color="primary.main" elevation={0} sx={{mt:1, mr:1}}> 
        <Box sx={{ display:'flex', justifyContent:'flex-end'}}>
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

    </AppBar>
   
    <Outlet/>
    </>
    )
}

export default Header;