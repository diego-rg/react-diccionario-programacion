import React from "react";

import LinkNav from "./LinkNav";

import { Typography, Grid } from "@mui/material";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

const ShowSections = () => {
  return (
    <Grid
      maxWidth="lg"
      id="info"
      component="section"
      spacing={7}
      container
      sx={{ marginY: 3 }}
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
            <CardActionArea sx={{ padding: 4 }}>
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
                <Typography variant="body1" color="text.secondary">
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
            <CardActionArea sx={{ padding: 4 }}>
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
                <Typography variant="body1" color="text.secondary">
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
            <CardActionArea sx={{ padding: 4 }}>
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
                <Typography variant="body1" color="text.secondary">
                  Comprueba la documentación de nuestra API y consúmela en tus
                  proyectos.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </LinkNav>
      </Grid>
    </Grid>
  );
};

export default ShowSections;
