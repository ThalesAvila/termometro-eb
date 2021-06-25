import puppeteer from 'puppeteer'

export default async function (req, res) {
  const { id } = req.query

  const browser = await puppeteer.launch({ headless: true, args: ['—no-sandbox', '—disable-setuid-sandbox'] });

  const webPage = await browser.newPage();

  const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/pdfReport?id=${id}`

  await webPage.goto(url);

  const pdf = await webPage.pdf({
    printBackground: true,
    width: 1056, 
    height: 1732,
  });

  await browser.close();

  res.setHeader('Content-Type', 'application/octet-stream');
  res.send(pdf);
}