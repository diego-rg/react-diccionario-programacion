import React from "react";
import { Document, Packer, Paragraph, TextRun, Header, Footer } from "docx";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const CheatsheetGenerator = ({ savedTerms }) => {
  //Xeración do doc
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

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "apuntes.docx");
    });
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<SaveIcon />}
      onClick={generateCheatsheet}
    >
      Descargar apuntes
    </Button>
  );
};

export default CheatsheetGenerator;
