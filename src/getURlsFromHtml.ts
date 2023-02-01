import jsdom from "jsdom";
const { JSDOM } = jsdom;

type fn = (html: string, baseUrl: string) => string[] | [];

const getURLsFromHtml: fn = (html, baseURL) => {
  let urls: string[] = [];
  const dom = new JSDOM(html);
  const ancherTags = dom.window.document.querySelectorAll("a");
  //   ancherTags.forEach((element) => {
  //   });
  for (let element of ancherTags) {
    try {
      let href = element.href;
      if (href.startsWith("/")) href = new URL(href, baseURL).href;
      if (href.endsWith("/")) href = href.slice(0, -1);

      const urlObj = new URL(href);
      urls.push(href);
    } catch (error: any) {
      console.log(` ${error.message}`);
    }
  }
  return urls;
};

export default getURLsFromHtml;
