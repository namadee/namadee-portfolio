import { Container } from '@mui/material';
import Header from './Header'

const Layout = () =>{
    return(
        <>
        <Container sx={{ width: '100%', height: '100vh'}}>
            <Header/>
        </Container>
        
        </>
    )
}

export default Layout;