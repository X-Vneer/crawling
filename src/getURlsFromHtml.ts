import jsdom from "jsdom";
const { JSDOM } = jsdom;

type fn = (html: string, baseUrl: string) => string[] | [];

const getURLsFromHtml: fn = (html, baseUrl) => {
  let urls: string[] = [];
  const dom = new JSDOM(html);
  const ancherTags = dom.window.document.querySelectorAll("a");
  //   ancherTags.forEach((element) => {
  //   });
  for (let element of ancherTags) {
    try {
      let href = element.href;
      if (href.startsWith("/")) href = baseUrl + href;
      if (href.endsWith("/")) href = href.slice(0, -1);
      //   this should throw an errer if its not a valid url
      const urlObj = new URL(href);
      urls.push(href);
    } catch (error) {
      console.log(error);
    }
  }
  return urls;
};

export default getURLsFromHtml;
