const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

(async () => {
	const pdf = await mdToPdf({ path: 'cv.md' }).catch(console.error);

    if (!pdf) {
        console.error('No pdf file generated.');

        return;
    }

    fs.writeFileSync('Uroš Anđelić CV.pdf', pdf.content);
})();