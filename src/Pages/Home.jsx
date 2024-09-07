import {Box, Container, Paper, Typography } from "@mui/material";
import photo from '../images/photo.png';

const Home =() => {

    return(
        <Container sx={{width:'100%', height:'100vh', display:{md:'flex', xs:'none'},justifyContent:'center', alignItems:'center',}}>
        <Paper
      sx={{
        display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'1rem',
        width: '60%',
        height: '70vh',
        background: 'linear-gradient(rgba(47, 47, 138, 0.63), rgba(201, 97, 222, 0.40))',
        p: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          pr:'2rem',
          pl:'0rem'
        }}
      >
        <Box
          component='img'
          src={photo}
          sx={{ width: '11rem', mr:'1rem' }}
        />
        <Typography variant="h1" align="left">
          Hi! I’m Namadee <br/> Kahatapitiya
        </Typography>
      </Box>
      <Typography
        variant="body1"
        align="justify"
        sx={{
          maxWidth: '60%', 
          ml:'2rem',
          lineHeight: 1.5, 
        }}
      >
        👋 Hi, I'm a software engineer skilled in Java, Spring Boot, ReactJS, JavaScript, PHP, and ServiceNow. 
        With a knack for solving complex problems, I thrive in collaborative environments where innovative solutions take shape.  
        Every line of code is a chance to craft something meaningful, and I'm always ready to push boundaries and embrace the next big challenge.
        Let’s build, solve, and create the future together! ✨
      </Typography>
    </Paper>
        </Container>
    )

}

export default Home;