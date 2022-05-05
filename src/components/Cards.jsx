import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, } from '@mui/material';
import { Link } from "react-router-dom";


const Cards = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 8 }}>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={12} sx={{textAlign:'center', marginBottom:'3rem', marginTop: '3rem'}}>
                <Typography variant="h4" color="initial">
                    Rooms
                </Typography>
            </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 300, cursor: "pointer", textAlign: "center" }}>
                <Link
                to="/rooms"
                state={{ type:"Habitación Sencilla" }}
                style={{ textDecoration: "none" }}
                >
                <CardMedia
                component="img"
                height="200"
                image="https://t3.ftcdn.net/jpg/02/76/69/94/240_F_276699443_o7xavtKHTD2pCt11UaRrYlFgn17XDMur.jpg"
                sx={{backgroundColor: "#103160"}}
                />
                <CardContent sx={{backgroundColor:"#134074"}}>
                    <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      mt: 2,
                      color: "#fff",
                      textDecoration: "inherit",
                      fontWeight: "light",
                    }}
                    >
                        Simple Room
                    </Typography>
                </CardContent>
                </Link>
            </Card>
        </Grid>
        <br></br>
        <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 300, cursor: "pointer", textAlign: "center" }}>
                <Link
                to="/rooms"
                state={{ type:"Habitación Junior" }}
                style={{ textDecoration: "none" }}
                >
                <CardMedia
                component="img"
                height="200"
                image="https://t4.ftcdn.net/jpg/01/31/18/99/240_F_131189921_fPJ1kC71fA5hZhC7H2b6bVZRRv2WADQg.jpg"
                sx={{backgroundColor: "#103160"}}
                />
                <CardContent sx={{backgroundColor:"#134074"}}>
                    <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      mt: 2,
                      color: "#fff",
                      textDecoration: "inherit",
                      fontWeight: "light",
                    }}
                    >
                        Junior Room
                    </Typography>
                </CardContent>
                </Link>
            </Card>
        </Grid>
        <br></br>
        <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 300, cursor: "pointer", textAlign: "center" }}>
                <Link
                to="/rooms"
                state={{ type:"Suite Imperial" }}
                style={{ textDecoration: "none" }}
                >
                <CardMedia
                component="img"
                height="200"
                image="https://t4.ftcdn.net/jpg/00/70/55/91/240_F_70559163_o0DOefsCPo7MxNscus7NgiakJ7kMtDQY.jpg"
                sx={{backgroundColor: "#103160"}}
                />
                <CardContent sx={{backgroundColor:"#134074"}}>
                    <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      mt: 2,
                      color: "#fff",
                      textDecoration: "inherit",
                      fontWeight: "light",
                    }}
                    >
                        Imperial Suite
                    </Typography>
                </CardContent>
                </Link>
            </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cards