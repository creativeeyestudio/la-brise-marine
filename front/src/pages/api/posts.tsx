import nextConfig from "../../../next.config";

const apiUrl = nextConfig.api_url + '/posts';

export async function getAllPosts() {
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${nextConfig.api_token}`,
    },
  });

  // Vérifiez si la requête a échoué
  if (!res.ok) {
    const errorText = await res.text(); // Essayez de lire le contenu de l'erreur
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getSinglePost(slug: string | string[] | undefined) {
  const res = await fetch(apiUrl + "/?populate=*&filters[slug][$eq]=" + slug, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${nextConfig.api_token}`,
    },
  });

  // Vérifiez si la requête a échoué
  if (!res.ok) {
    const errorText = await res.text(); // Essayez de lire le contenu de l'erreur
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
