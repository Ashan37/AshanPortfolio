const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
    { name: 'github-icon', slug: 'github', color: '181717' },
    { name: 'linkedin-icon', slug: 'linkedin', color: '0A66C2' },
    { name: 'behance-icon', slug: 'behance', color: '1769FF' }
];

const outputDir = path.join(__dirname, 'app', 'assets');

icons.forEach(icon => {
    const url = `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`;
    const outputPath = path.join(outputDir, `${icon.name}.svg`);

    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
            fs.writeFileSync(outputPath, data);
            console.log(`✅ Downloaded: ${icon.name} → ${icon.name}.svg`);
        });
    }).on('error', (err) => {
        console.error(`❌ Error downloading ${icon.name}:`, err.message);
    });
});
