import React from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const CheatsheetGenerator = ({ savedTerms }) => {
  //Xeración do doc
  const generateCheatsheet = () => {
    const cheatsheetData = [];

    for (let i = 0; i < savedTerms.length; i++) {
      cheatsheetData.push(
        new Paragraph({
          children: [
            new TextRun(`${savedTerms[i].name}: ${savedTerms[i].definition}`),
          ],
        })
      );
    }

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 300,
                right: 300,
                bottom: 300,
                left: 300,
              },
            },
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
