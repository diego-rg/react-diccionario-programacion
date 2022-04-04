import React from "react";

import { Container, Box, Input } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const apiText = [
  {
    title: "Término aleatorio:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/terms/random",
  },
  {
    title: "Todos los términos:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/terms/all",
  },
  {
    title: "Categorías existentes:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/terms/categories",
  },
  {
    title: "Todos los términos de una categoría:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/terms/{category}",
  },
  {
    title: "Término concreto:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/terms/{category}/{name}",
  },
  {
    title: "Búsqueda:",
    description:
      "https://api-diccionarioprogramacion.herokuapp.com/api/search?q={query}",
  },
];

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
