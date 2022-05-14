import React from "react";

import LinkNav from "./LinkNav";

import { Box, Typography, Grid, Button, Container } from "@mui/material";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

const Home = () => {
  return (
    <Container
      component="main"
      sx={{
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        component="section"
        spacing={9}
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="md"
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              margin: "auto",
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            Consulta el diccionario de programación, crea tus propios apuntes en
            formato doc o consume nuestra API REST en tus proyectos.
          </Typography>
          <Box
            sx={{
              margin: "auto",
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Button
              sx={{
                marginY: 2,
                fontSize: {
                  xs: "0.8rem",
                  sm: "1.05rem",
                },
              }}
              variant="contained"
              color="primary"
              href="#info"
            >
              Comenzar
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            order: { xs: -1, sm: -1, md: 1 },
          }}
        >
          <Box
            component="img"
            src="/book.svg"
            width="90%"
            maxWidth="400px"
            alt="Imagen de una mujer con un libro"
          ></Box>
        </Grid>
      </Grid>

      <Grid
        maxWidth="lg"
        id="info"
        component="section"
        spacing={7}
        container
        sx={{ marginY: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <LinkNav href="/dictionary">
            <Card
              sx={{
                // border: "1px solid #E2E5DE",
                boxShadow: "none",
              }}
            >
              <CardActionArea sx={{ padding: 2 }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/checking.svg"
                  alt="person reading data"
                />
                <CardContent sx={{ padding: 0, paddingTop: 3 }}>
                  <Typography gutterBottom variant="body2" component="h2">
                    Diccionario
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Consulta el diccionario de términos sobre programación web y
                    sus definiciones.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </LinkNav>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <LinkNav href="/cheatsheet">
            <Card
              sx={{
                // border: "1px solid #E2E5DE",
                boxShadow: "none",
              }}
            >
              <CardActionArea sx={{ padding: 2 }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/choosing.svg"
                  alt="person choosing data"
                />
                <CardContent sx={{ padding: 0, paddingTop: 2 }}>
                  <Typography gutterBottom variant="body2" component="h2">
                    Apuntes
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Crea tus propios apuntes seleccionando los términos que
                    necesites y descárgalos.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </LinkNav>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <LinkNav href="/api">
            <Card
              sx={{
                // border: "1px solid #E2E5DE",
                boxShadow: "none",
              }}
            >
              <CardActionArea sx={{ padding: 2 }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/data.svg"
                  alt="person checking a network"
                />
                <CardContent sx={{ padding: 0, paddingTop: 3 }}>
                  <Typography gutterBottom variant="body2" component="h2">
                    API
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Comprueba la documentación de nuestra API y consúmela en tus
                    proyectos.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </LinkNav>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
