// Script to download tech stack logos
// Run with: node download-tech-logos.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Simple Icons CDN for high-quality tech logos
const logos = [
  { name: 'nodejs', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg', filename: 'nodejs.png' },
  { name: 'express', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg', filename: 'express.png' },
  { name: 'mysql', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg', filename: 'mysql.png' },
  { name: 'javascript', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg', filename: 'javascript.png' },
  { name: 'html5', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg', filename: 'html.png' },
  { name: 'css3', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg', filename: 'css.png' },
  { name: 'php', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg', filename: 'php.png' },
  { name: 'nextjs', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg', filename: 'nextjs.png' },
];

const assetsDir = path.join(__dirname, 'app', 'assets');

console.log('📥 Downloading tech stack logos...\n');

logos.forEach((logo, index) => {
  const filePath = path.join(assetsDir, logo.filename);
  
  https.get(logo.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`✅ Downloaded: ${logo.name} → ${logo.filename}`);
      
      if (index === logos.length - 1) {
        console.log('\n🎉 All logos downloaded successfully!');
        console.log('\n📝 Next steps:');
        console.log('1. Open app/assets/assets.js');
        console.log('2. Add imports for the new logos (already noted in file)');
        console.log('3. Update the toolsData array to include all logos');
        console.log('4. Restart your dev server if running\n');
      }
    });
  }).on('error', (err) => {
    console.error(`❌ Error downloading ${logo.name}:`, err.message);
  });
});
