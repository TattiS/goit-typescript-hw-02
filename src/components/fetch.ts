import axios from "axios";
import { IImage, IPicturesResponse } from "./types";

async function getPictures(
  searchStr: string,
  page = 1,
  per_page = 12
): Promise<IPicturesResponse> {
  if (!searchStr.trim()) {
    console.error("Query is empty!");
    throw new Error("Query is empty!");
  }

  const result = await axios.get<IPicturesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: searchStr,
        page: page,
        per_page: per_page,
        orientation: "landscape",
        client_id: "1MxVyxjOoLRpZ1W_lpZytyfBAUKCMpv-Z0OsRAyOfLE",
      },
    }
  );
  return result.data;
}

export default getPictures;
