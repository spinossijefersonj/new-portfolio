import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))  

    const StyledImg = styled("img")(() => ({
       width: "100%",
       borderRadius: "50%"
  }))  


    return (
      <>
          <StyledHero>
              <Container>
                  <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                          <StyledImg src={Avatar} />
                      </Grid>
                      <Grid item xs={12} md={8}>
                          <Typography color="primary" variant="h1" textAlign="center">Jeferson Spinossi</Typography>
                          <Typography color="primary" variant="h2" textAlign="center">I´m a Software Developer</Typography>
                          <Grid container>
                              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                  <Button>
                                      <DownloadIcon/>
                                      Download CV
                                  </Button>
                              </Grid>
                              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                  <Button>
                                      <MailOutlineIcon/>
                                      Contact me
                                  </Button>
                              </Grid>
                          </Grid>
                          
                          
                      </Grid>
                  </Grid>
              </Container>          
          </StyledHero>
      </>
    )
  }
  
  export default Hero
  