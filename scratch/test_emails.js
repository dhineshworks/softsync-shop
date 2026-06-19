const https = require('https');

const emails = ['dhineshtn0@gmail.com', 'softsynctool@gmail.com', 'test@example.com'];
const target = 'https://reseller.ado-besoft.com/api/user-status';
const proxyUrl = 'https://corsproxy.io/?url=' + encodeURIComponent(target);

async function testEmail(email) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ email });
    const url = new URL(proxyUrl);
    const req = https.request({
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          console.log(`Email: ${email} -> Found: ${parsed.found}, Status: ${parsed.status}, Org: ${parsed.organization ? parsed.organization.name : 'N/A'}`);
          resolve(parsed);
        } catch (e) {
          console.log(`Email: ${email} -> JSON Parse Error: ${body}`);
          resolve(null);
        }
      });
    });
    
    req.on('error', (e) => {
      console.error(`Email: ${email} -> Error:`, e);
      resolve(null);
    });
    
    req.write(data);
    req.end();
  });
}

(async () => {
  for (const email of emails) {
    await testEmail(email);
  }
})();
