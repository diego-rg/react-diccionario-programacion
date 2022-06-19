import React from "react";

import { Box, Typography, Grid } from "@mui/material";

const AppAbout = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: 4,
        background: "#f2f2f2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                textAlign: { xs: "center", sm: "center", md: "start" },
              }}
            >
              Definiciones de fuentes oficiales.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/book.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de una mujer con un libro"
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                textAlign: { xs: "center", sm: "center", md: "start" },
              }}
            >
              Últimas tecnologías.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/book.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de una mujer con un libro"
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                textAlign: { xs: "center", sm: "center", md: "start" },
              }}
            >
              Clasificación por categorías.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/book.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de una mujer con un libro"
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                textAlign: { xs: "center", sm: "center", md: "start" },
              }}
            >
              Traducido al español.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/languaje.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de tres personas trabajado."
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppAbout;
