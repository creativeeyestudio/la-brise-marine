import nextConfig from "../../../next.config";

const apiUrl = nextConfig.apiUrl + "/api/pages?populate=deep";

export async function getHomePage() {
    return initPage(true);
}

export async function getPage(slug: string) {
    return initPage(false, slug);
}

async function initPage(mainPage: boolean, slug: string | null = null) {
  const paramUrl = mainPage 
    ? '&filters[homepage][$eq]=true'
    : '&filters[slug][$eq]=' + slug;

  const res = await fetch(apiUrl + paramUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${nextConfig.apiToken}`,
    },
  });

  // Vérifiez si la requête a échoué
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Error fetching data: ${res.status} ${res.statusText}. Details: ${errorText}`);
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }  

  return res.json();
}
