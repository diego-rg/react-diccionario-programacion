import React from "react";
import apiText from "../api/apiText";

import { Container, Box, Input } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const ApiInfo = () => {
  const renderedText = apiText.map((line) => {
    return (
      <List
        sx={{
          paddingBottom: 3,
        }}
        key={line.title}
      >
        <ListItem>
          <CheckIcon
            fontSize="small"
            sx={{
              paddingRight: 1,
            }}
          ></CheckIcon>
          {line.title}
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input
            sx={
              {
                // "&:hover": {
                //   textDecoration: "none",
                //   cursor: "default!important",
                // },
              }
            }
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
        fontFamily: "Josefin Sans",
        fontSize: 18,
        background: "RGB(234,234,234, 0.5)",
        padding: 2,
        boxShadow: 3,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <Box>{renderedText}</Box>
    </Container>
  );
};

export default ApiInfo;
