import crawling from "./crawling.js";

async function main() {
  if (process.argv.length < 3) {
    console.log("messing paramenter");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many paramenter");
    process.exit(1);
  }
  const baseUrl = process.argv[2];

  const crawledPages = await crawling(baseUrl, baseUrl, {});
  console.log(crawledPages);
}

main();
