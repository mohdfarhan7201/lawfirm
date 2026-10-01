const https = require('https');
const fs = require('fs');
const path = require('path');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const html = await get('https://www.pinterest.com/pin/98305204362484794/');
    fs.writeFileSync('pinterest_raw.html', html);
    
    // Extract metadata
    const ogImg = html.match(/content="([^"]+)"\s+property="og:image"/) || html.match(/property="og:image"\s+content="([^"]+)"/);
    const ogTitle = html.match(/content="([^"]+)"\s+property="og:title"/) || html.match(/property="og:title"\s+content="([^"]+)"/);
    const ogDesc = html.match(/content="([^"]+)"\s+property="og:description"/) || html.match(/property="og:description"\s+content="([^"]+)"/);
    
    console.log('OG_TITLE:', ogTitle ? ogTitle[1] : 'none');
    console.log('OG_DESC:', ogDesc ? ogDesc[1] : 'none');
    console.log('OG_IMG:', ogImg ? ogImg[1] : 'none');
    
    const matches = html.match(/https:\/\/i\.pinimg\.com\/[^\s"']+\.(?:jpg|png|webp)/g);
    if (matches) {
      const unique = Array.from(new Set(matches));
      console.log('IMAGES_FOUND:', JSON.stringify(unique.slice(0, 10), null, 2));
    }
  } catch (err) {
    console.error(err);
  }
}

run();
