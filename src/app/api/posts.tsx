import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/api/posts/?populate=deep';

export async function getAllPosts() {
  try {
    const res = await axios.get(apiUrl,  {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
      }
    });

    return res.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export async function getSinglePost(slug: string | string[] | undefined) {
  console.log(apiUrl);
  
  try {
    const res = await axios.get(apiUrl + "&filters[slug][$eq]=" + slug,  {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
      }
    });

    return res.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw new Error(`Failed to fetch data: ${error}`);
  }
}
