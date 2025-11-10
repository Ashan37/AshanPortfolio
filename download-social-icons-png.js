const https = require('https');
const fs = require('fs');
const path = require('path');

// Using a different CDN that provides PNG versions
const icons = [
    { name: 'github-icon', url: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    { name: 'linkedin-icon', url: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
    { name: 'behance-icon', url: 'https://cdn-icons-png.flaticon.com/512/145/145799.png' }
];

const outputDir = path.join(__dirname, 'app', 'assets');

icons.forEach(icon => {
    const outputPath = path.join(outputDir, `${icon.name}.png`);

    https.get(icon.url, (res) => {
        const fileStream = fs.createWriteStream(outputPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✅ Downloaded: ${icon.name} → ${icon.name}.png`);
        });
    }).on('error', (err) => {
        console.error(`❌ Error downloading ${icon.name}:`, err.message);
    });
});
