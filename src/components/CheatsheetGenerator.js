import React from "react";
import { Document, Packer, Paragraph, TextRun, Header, Footer } from "docx";
import { saveAs } from "file-saver";

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
              children: [new Paragraph("Apuntes de Programación")],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph(
                  "https://github.com/diego-rg/react-diccionario-programacion"
                ),
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

  return <button onClick={generateCheatsheet}>Descargar apuntes</button>;
};

export default CheatsheetGenerator;
