const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
    { 
        name: 'github', 
        url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg'
    },
    { 
        name: 'linkedin', 
        url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg'
    }
];

const outputDir = path.join(__dirname, 'app', 'assets');

// Download SVGs first (we'll convert or use simple colored icons)
icons.forEach(icon => {
    const outputPath = path.join(outputDir, `${icon.name}.png`);
    
    // Create simple PNG using a CDN that provides PNG icons
    const pngUrl = `https://img.icons8.com/material-outlined/96/000000/${icon.name}.png`;
    
    https.get(pngUrl, (res) => {
        const fileStream = fs.createWriteStream(outputPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✅ Downloaded: ${icon.name}.png`);
        });
    }).on('error', (err) => {
        console.error(`❌ Error downloading ${icon.name}:`, err.message);
    });
});

console.log('Downloading GitHub and LinkedIn PNG icons...');
