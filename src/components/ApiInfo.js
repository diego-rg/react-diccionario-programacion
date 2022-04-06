import React from "react";
import apiText from "../api/apiText";

import { Container, Input } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const ApiInfo = () => {
  const renderedText = apiText.map((line) => {
    return (
      <List key={line.title}>
        <ListItem>
          <CheckIcon
            sx={{
              paddingRight: 1,
            }}
          ></CheckIcon>
          <Typography variant="body1" component="p">
            {line.title}
          </Typography>
        </ListItem>
        <ListItem>
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
        </ListItem>
      </List>
    );
  });

  return (
    <Container
      maxWidth={"md"}
      component="main"
      sx={{
        background: "RGB(234,234,234, 0.5)",
        padding: 2,
        boxShadow: 3,
        borderRadius: "12px",
        marginTop: 5,
      }}
    >
      {renderedText}
    </Container>
  );
};

export default ApiInfo;
