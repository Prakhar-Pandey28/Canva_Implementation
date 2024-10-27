import express from 'express';
import request from 'request';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000; // Update to use dynamic PORT

// Serve static files (index.html, app.js, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route for images (e.g., /proxy-image?url=IMAGE_URL)
app.get('/proxy-image', (req, res) => {
    const imageUrl = req.query.url; // Extract the image URL from query parameters
    if (!imageUrl) {
        return res.status(400).send('Image URL is required');
    }
    // Proxy the request for the image
    request(imageUrl).pipe(res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
