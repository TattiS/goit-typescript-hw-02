import axios from "axios";

async function getPictures(searchStr, page = 1, per_page = 12) {
  if (!searchStr.trim()) {
    console.error("Query is empty!");
    return;
  }

  const result = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: searchStr,
      page: page,
      per_page: per_page,
      orientation: "landscape",
      client_id: "1MxVyxjOoLRpZ1W_lpZytyfBAUKCMpv-Z0OsRAyOfLE",
    },
  });
  return result.data;
}

export default getPictures;
