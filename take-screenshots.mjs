import { chromium } from 'playwright';

const BASE = 'http://localhost:19006';
const OUT = './assets/images/screenshots';
const VIEWPORT = { width: 390, height: 844 };

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
  });
  const page = await context.newPage();

  // 1. Login screen
  console.log('Navigating to app...');
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${OUT}/login.png` });
  console.log('Saved: login.png');

  // 2. Log in
  console.log('Logging in...');
  await page.getByText('Sign in with email', { exact: false }).click();
  await page.waitForTimeout(1500);
  const inputs = page.locator('input');
  await inputs.nth(0).fill('johndoe.test@sharewants.com');
  await inputs.nth(1).fill('TestPass123');
  await page.waitForTimeout(300);
  await page.getByText('Sign In', { exact: true }).click();
  console.log('Waiting for auth...');
  await page.waitForTimeout(8000);

  // 3. Feeds screen
  await page.screenshot({ path: `${OUT}/feeds.png` });
  console.log('Saved: feeds.png');

  // 4. Navigate using programmatic click on tab elements
  // The tab bar has 5 children (TouchableOpacity divs)
  // Find and click them via JS since they're off-screen
  async function clickTab(index, name, filename) {
    console.log(`Navigating to ${name}...`);
    const clicked = await page.evaluate((tabIndex) => {
      // Find the tab bar: flex-direction row, borderTopColor #ddd, full width
      const divs = document.querySelectorAll('div');
      for (const el of divs) {
        const style = window.getComputedStyle(el);
        if (style.borderTopColor === 'rgb(221, 221, 221)' &&
            style.flexDirection === 'row' &&
            el.children.length === 5) {
          const tab = el.children[tabIndex];
          if (tab) {
            // Dispatch click/press events like React Native expects
            tab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            return true;
          }
        }
      }
      return false;
    }, index);

    if (clicked) {
      await page.waitForTimeout(4000);
      await page.screenshot({ path: `${OUT}/${filename}.png` });
      const text = await page.locator('body').innerText().catch(() => '');
      console.log(`${name} text:`, text.substring(0, 120));
    } else {
      console.log(`Could not find ${name} tab`);
    }
  }

  // Tabs: Home(0), Trends(1), Add(2), MyList(3), Follows(4)
  await clickTab(3, 'MyList', 'mygifts');
  await clickTab(4, 'Follows', 'follows');
  await clickTab(1, 'Trends', 'trends');

  await browser.close();
  console.log('\nDone!');
}

run().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
