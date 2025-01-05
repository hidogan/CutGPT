import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
    const inputFile = path.join(__dirname, 'public', 'logo512.png');
    const sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'apple-touch-icon.png': 180
    };

    for (const [filename, size] of Object.entries(sizes)) {
        await sharp(inputFile)
            .resize(size, size)
            .toFile(path.join(__dirname, 'public', filename));
        console.log(`Generated ${filename}`);
    }
}

generateFavicons().catch(console.error);
