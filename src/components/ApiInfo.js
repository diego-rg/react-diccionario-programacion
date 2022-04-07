import React from "react";
import apiText from "../api/apiText";

import { Input } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

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
        <Grid item xs={12} sm={3} sx={{ marginY: { xs: 0, sm: 2 } }}>
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
        <Grid item xs={12} sm={9} sx={{ marginBottom: { xs: 3, sm: 0 } }}>
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
      </Grid>
    );
  });

  return (
    <Box
      component="main"
      sx={{
        background: "RGB(255,171,0, 0.2)",
        padding: 2,
        boxShadow: 3,
        borderRadius: "12px",
        marginY: 2,
        marginX: 2,
      }}
    >
      {renderedText}
    </Box>
  );
};

export default ApiInfo;
