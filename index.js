const fs = require("fs/promises");
const { mdToPdf } = require("md-to-pdf");

(async () => {
  const start = new Date();

  const pdf = await generatePdf();

  await writeToFile(pdf);

  console.log(`Done in ${new Date() - start} ms!`);
})();

async function generatePdf() {
  console.log("Generating CV...");
  const pdf = await mdToPdf({ path: "cv.md" }).catch(console.error);

  if (!pdf) {
    throw new Error("No pdf file generated.");
  }

  return pdf;
}

function writeToFile(pdf) {
  return Promise.all([
    fs.writeFile("Uroš Anđelić CV.pdf", pdf.content),
    fs.writeFile("Uros Andjelic CV.pdf", pdf.content),
  ]);
}
