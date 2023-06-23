 import React from 'react'
 import { Box } from '@mui/system'
 import Typography from '@mui/material/Typography';
 import Button from '@mui/material/Button';
 import HeroBannerImage from '../images/banner.png'
 const HeroBanner = () => {
   return (
     <Box sx={{
        mt: { lg: '100px', xs: '50px'},
        ml: { sm: '50px'}
     }} position="relative" p="20px">
        <Typography color = "#FF2625"
        fontWeight="600"
        fontSize="30px"
        >
           Vyayam
        </Typography>
        <Typography fontWeight={700}
        sx={
            {
                fontSize:{ lg: '25px', xs: '15px'}
            }
        } mb="23px" mt="30px">
            अलसस्य कुतो विद्या ,<br /> अविद्यस्य कुतो धनम् | <br />अधनस्य कुतो मित्रम् ,<br /> अमित्रस्य कुतः सुखम् ||
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained"
        color="error" href="#exercises" sx={{backgroundColor: '#ff2625', padding:'10px'}}>Explore exercises</Button>
        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{
            opacity: 0.1,
            display: { lg:'block' , xs: 'none'}
          }}
          fontSize="200px">Exercises</Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> 
     </Box>
   )
 }
 
 export default HeroBanner