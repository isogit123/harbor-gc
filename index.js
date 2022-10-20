const puppeteer = require("puppeteer");
const baseUrl = process.env.HARBOR_URL;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const ignoreHTTPSErrors = process.env.IGNORE_HTTPS_ERRORS || false;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    ignoreHTTPSErrors: ignoreHTTPSErrors,
  });
  const page = await browser.newPage();

  await page.goto(baseUrl);

  // Type login info.
  await page.waitForSelector("#login_username");
  await page.type("#login_username", userName);
  await page.type("#login_password", password);

  // Click log in button.
  await page.click("#log_in");
  //Go to garbage collection page
  await page.goto(baseUrl + "harbor/gc");
  //Toggle Allow garbage collection on untagged artifacts
  await page.waitForSelector("#delete_untagged");
  await page.click("#delete_untagged");
  //Click GC Now button
  await page.click("#gc-now");

  await browser.close();
})();
