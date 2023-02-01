import getHtmlPage from "./getHtmlPage.js";
import normalizeURL from "./nomalizeURL.js";
import getURLsFromHtml from "./getURlsFromHtml.js";

const crawling = async (
  baseUrl: string,
  currentURl: string,
  crawledPages: any
) => {
  try {
    const baseURLObj = new URL(baseUrl);
    const currentURlObj = new URL(currentURl);

    console.log(`

    ${baseUrl}
    ${currentURl}

    `);

    // to make sure we are crawling the same website
    if (baseURLObj.hostname !== currentURlObj.hostname) return crawledPages;

    const normalizedCurrentURL = normalizeURL(currentURl);
    if (crawledPages[normalizedCurrentURL] > 0) {
      crawledPages[normalizedCurrentURL]++;

      return crawledPages;
    }
    // adding current url to crawledPages obj
    crawledPages[normalizedCurrentURL] = 1;

    const html = await getHtmlPage(currentURl);
    const urls = getURLsFromHtml(html, currentURl);
    // let crawlingOperation = []
    for (let [ind, url] of Object.entries(urls)) {
      crawledPages = await crawling(baseUrl, url, crawledPages);
    }
  } catch (error) {
    // console.log(error);
  }
  return crawledPages;
};

export default crawling;
