import * as React from 'react';
import {Box , Card, CardContent, Typography } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxHeight:'12.5rem', p:'0.8rem', bgcolor: 'Rgba(44,44,138,0.6)'}}>
      <CardActionArea onClick={props.onClick}>
       <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', gap:'0.2rem'}}>
       
           <Box
         component='img'
          src={props.image}
          sx={{ maxWidth: '8rem' }}
        />
       </Box>
        
       <CardContent sx={{ maxHeight: '10rem'}}> 
          <Typography variant="body2" component="div" align='center'>
            {props.shortdesc}
          </Typography>
          <Typography variant="body1" align='justify' marginTop={'1rem'}>
            {props.desc}
          </Typography>
          
        </CardContent >
         <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            {props.technologies.map((e,index)=>{
                console.log(e);
                return(
                 <Box
                    key={index}
                    component='img'
                    src={e}
                    sx={{ width: '30px' }}
                 />
                );
            })}
          </Box>
          </CardActionArea>
    </Card>
  );
}
