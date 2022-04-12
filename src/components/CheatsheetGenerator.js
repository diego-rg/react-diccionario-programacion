import React from "react";

import { Document, Packer, Paragraph, TextRun, Header, Footer } from "docx";
import { saveAs } from "file-saver";

import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

//Componente que genera el archivo doc con los términos seleccionados en el componente CreateCheatsheet usando docx
const CheatsheetGenerator = ({ savedTerms }) => {
  //Generamos los datos del documento a partir de los términos seleccionados
  const generateCheatsheet = () => {
    const cheatsheetData = [];

    for (let i = 0; i < savedTerms.length; i++) {
      cheatsheetData.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${savedTerms[i].name}: `,
              bold: true,
            }),
            new TextRun(`${savedTerms[i].definition}`),
          ],
        })
      );
    }

    //Creamos el documento e insertamos los datos usando cheatsheetData
    const doc = new Document({
      creator: "diego-rg",
      description:
        "Apuntes generados con https://github.com/diego-rg/react-diccionario-programacion",
      title: "Mis apuntes de programación",
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 500,
                right: 500,
                bottom: 500,
                left: 500,
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Apuntes Programación",
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "https://github.com/diego-rg/react-diccionario-programacion",
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          },
          children: cheatsheetData,
        },
      ],
    });

    //Generamos el documento para descargar
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "apuntes.docx");
    });
  };

  return (
    <Box
      sx={{
        margin: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          marginY: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: {
            xs: "0.8rem",
            sm: "1.05rem",
          },
        }}
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<SaveIcon />}
        onClick={generateCheatsheet}
      >
        Descargar apuntes
      </Button>
    </Box>
  );
};

export default CheatsheetGenerator;
