const puppeteer = require("puppeteer");

const URL = "http://contractorsinsurancereview.com/ExampleForm/";
const success = "You reached to the Thank you page";

async function test() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL);

  await page.type("#name", "John Doe");
  await page.type("#email", "test@gmail.com");
  await page.type("#phone", "+972526536111");
  await page.type("#company", "Jones Software");

  await page.select("#employees", "51-500");

  await page.screenshot({ path: "Before_Btn_Click.png" });

  await page.click(".primary", "left");

  const pageTitle = await page.title();
  if (pageTitle === "Thank You") {
    console.log(success);
  } else {
    console.log("Fail");
  }

  await browser.close();
}

try {
  test();
} catch {
  console.log("error");
}
