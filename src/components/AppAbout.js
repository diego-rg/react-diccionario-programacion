import React from "react";

import { Box, Typography, Grid } from "@mui/material";

const AppAbout = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: 1,
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/languaje.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de tres personas trabajado."
          ></Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: 4,
            }}
          >
            Traducido al español.
          </Typography>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/languaje.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de tres personas trabajado."
          ></Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: 4,
            }}
          >
            Traducido al español.
          </Typography>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/languaje.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de tres personas trabajado."
          ></Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: 4,
            }}
          >
            Traducido al español.
          </Typography>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/languaje.svg"
            width="100%"
            maxWidth="200px"
            alt="Imagen de tres personas trabajado."
          ></Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: 4,
            }}
          >
            Traducido al español.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppAbout;
