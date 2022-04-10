import React from "react";

import LinkNav from "./LinkNav";

import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Home = () => {
  return (
    <Box
      component="main"
      maxWidth="lg"
      sx={{
        padding: 2,
        marginTop: { xs: 2, sm: 2 },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          paddingBottom: 4,
          textAlign: "center",
        }}
      >
        Consulta el diccionario de programación, crea tus propios apuntes en
        formato doc o consume nuestra API REST en tus proyectos.
      </Typography>

      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={3} sx={{ marginTop: { xl: 20, lg: 0 } }}>
          <LinkNav
            sx={{
              margin: 0,
            }}
            href="/dictionary"
          >
            <Card
              sx={{
                maxWidth: { xs: "none", sm: 300 },
                border: "1px solid #E2E5DE",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/checking.svg"
                  alt="person reading data"
                />
                <CardContent>
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

        <Grid item xs={12} sm={3}>
          <LinkNav href="/cheatsheet">
            <Card
              sx={{
                maxWidth: { xs: "none", sm: 300 },
                border: "1px solid #E2E5DE",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/choosing.svg"
                  alt="person choosing data"
                />
                <CardContent>
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

        <Grid item xs={12} sm={3}>
          <LinkNav href="/api">
            <Card
              sx={{
                maxWidth: { xs: "none", sm: 300 },
                border: "1px solid #E2E5DE",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/data.svg"
                  alt="person checking a network"
                />
                <CardContent>
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
    </Box>
  );
};

export default Home;
