import axios from "axios";
import { AxiosError } from "axios";

const getHtmlPage = async (baseUrl: string) => {
  try {
    const response = await axios.get(baseUrl);
    if (!response.headers["content-type"].includes("text/html"))
      throw new Error("response is not a web page!");
    return response.data;
  } catch (error) {
    let err = error as AxiosError;
    console.log(`
   
    error message:

    ${err.message} 

    when crawling: ${baseUrl}
  
    `);
    process.exit(1);
  }
};

export default getHtmlPage;
