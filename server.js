const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Puppeteer API endpoint example
app.get('/api/screenshot', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: 'new',  // or true
      executablePath: process.env.CHROME_PATH || undefined,
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');

    const screenshotBuffer = await page.screenshot();

    await browser.close();

    res.set('Content-Type', 'image/png');
    res.send(screenshotBuffer);
  } catch (error) {
    console.error('Error launching Puppeteer:', error);
    res.status(500).send('Failed to take screenshot');
  }
});

// Handles any other requests and serves React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
