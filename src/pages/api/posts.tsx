const apiUrl = process.env.API_URL + '/api/posts/?populate=*';

export async function getAllPosts() {
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  // Vérifiez si la requête a échoué
  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getSinglePost(slug: string | string[] | undefined) {
  const res = await fetch(apiUrl + "&filters[slug][$eq]=" + slug, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
