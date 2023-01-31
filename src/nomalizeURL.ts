const normalizeURL = (url: string) => {
  // if it end with a slash
  if (url.slice(-1) === "/") url = url.slice(0, -1);
  const urlObj = new URL(url);
  return `${urlObj.hostname}${urlObj.pathname}`;
};

export default normalizeURL;
