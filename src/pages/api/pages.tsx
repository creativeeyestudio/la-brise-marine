const apiUrl = process.env.API_URL + "/api/pages?populate=deep";

export async function getHomePage() {
    return initPage(true);
}

export async function getPage(slug: string | string[] | null = null) {
    return initPage(false, slug);
}

async function initPage(mainPage: boolean, slug: string | string[] | null = null) {
  const paramUrl = mainPage 
    ? '&filters[homepage][$eq]=true'
    : '&filters[slug][$eq]=' + slug;

  const res = await fetch(apiUrl + paramUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Error fetching data: ${res.status} ${res.statusText}. Details: ${errorText}`);
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }  

  return res.json();
}
