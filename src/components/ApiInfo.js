import React from "react";
import apiText from "../api/apiText";

import {
  Input,
  Grid,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

//Componente que renderiza la documentación de la API que tenemos en un fichero
const ApiInfo = () => {
  const renderedText = apiText.map((line) => {
    return (
      <Grid
        container
        spacing={1}
        key={line.title}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{ marginTop: { xs: 3, sm: 0 }, marginY: { sm: 3 } }}
        >
          <Box sx={{ display: "flex" }}>
            <CheckIcon
              sx={{
                paddingRight: 1,
              }}
            ></CheckIcon>
            <Typography variant="body1" component="p">
              {line.title}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          sx={{ marginBottom: { xs: 3, sm: 0 }, marginY: { sm: 3 } }}
        >
          <Box sx={{ display: "flex" }}>
            <Input
              fullWidth
              readOnly
              type="text"
              id={line.title}
              value={line.description}
            ></Input>
            <IconButton
              aria-label="copy"
              size="small"
              onClick={async () =>
                await navigator.clipboard.writeText(
                  document.getElementById(`${line.title}`).value
                )
              }
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          <Divider variant="middle" sx={{ margin: 1 }} />
        </Grid>
      </Grid>
    );
  });

  return (
    <Box
      component="main"
      sx={{
        padding: 2,
      }}
    >
      {renderedText}
    </Box>
  );
};

export default ApiInfo;
