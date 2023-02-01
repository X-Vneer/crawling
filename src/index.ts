import getURLsFromHtml from "./getURlsFromHtml.js";
import normalizeURL from "./nomalizeURL.js";
import getHtml from "./getHtmlPage.js";

function main() {
  if (process.argv.length < 3) {
    console.log("messing paramenter");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many paramenter");
    process.exit(1);
  }
  const baseUrl = process.argv[2];
  getHtml(baseUrl);
}

main();
