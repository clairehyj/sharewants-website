import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });

  // Desktop screenshot
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const dp = await desktop.newPage();
  await dp.goto('http://localhost:4000/', { waitUntil: 'networkidle', timeout: 15000 });
  await dp.waitForTimeout(1000);
  await dp.screenshot({ path: '/tmp/site-desktop.png', fullPage: true });
  console.log('Saved: /tmp/site-desktop.png');

  // Mobile screenshot
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
  const mp = await mobile.newPage();
  await mp.goto('http://localhost:4000/', { waitUntil: 'networkidle', timeout: 15000 });
  await mp.waitForTimeout(1000);
  await mp.screenshot({ path: '/tmp/site-mobile.png', fullPage: true });
  console.log('Saved: /tmp/site-mobile.png');

  // Privacy page
  await dp.goto('http://localhost:4000/privacy/', { waitUntil: 'networkidle', timeout: 15000 });
  await dp.screenshot({ path: '/tmp/site-privacy.png' });
  console.log('Saved: /tmp/site-privacy.png');

  await browser.close();
  console.log('Done!');
}

run().catch(e => { console.error(e.message); process.exit(1); });
