const fs = require('fs/promises');
const { mdToPdf } = require('md-to-pdf');

(async () => {
    console.log('Generating CV...');
	const pdf = await mdToPdf({ path: 'cv.md' }).catch(console.error);

    if (!pdf) {
        console.error('No pdf file generated.');

        return;
    }

    await Promise.all([
        fs.writeFile('Uroš Anđelić CV.pdf', pdf.content),
        fs.writeFile('Uros Andjelic CV.pdf', pdf.content),
    ]);

    console.log('Done');
})();