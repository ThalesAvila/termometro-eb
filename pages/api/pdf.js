import chromium from 'chrome-aws-lambda';

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}


const pdf = async function (req, res) {
  const { id } = req.query

  // const browser = await puppeteer.launch({ headless: true, args: ['—no-sandbox', '—disable-setuid-sandbox'] });
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });

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

export default allowCors(pdf);