import { getHomePage } from "../app/api/pages";
import Error from "next/error";
import PageProps from "@/app/interfaces/page";
import Head from "next/head";
import WebPage from "@/app/_components/templates/WebPage";
import ContentPage from "@/app/_components/layouts/ContentPage";
import { GetStaticProps } from "next";

interface PageHomeProps {
  page: PageProps | null;
  error: string | null;
}

const PageHome: React.FC<PageHomeProps> = ({ page, error }) => {
  
  if (error || !page) {
    console.error(error || "Page non trouvée");
    return <Error statusCode={error ? 500 : 404} />;
  }

  const blocks = page.attributes.content_page;

  return (
    <ContentPage secondary_page={page.attributes.secondary_page}>
      <Head>
        <title>{page.attributes.meta_title}</title>
        <meta name="description" content={page.attributes.meta_desc} />
      </Head>
      <WebPage blocks={blocks} />
    </ContentPage>
  );
};

// Cette fonction sera exécutée côté serveur pour récupérer les données lors de la génération de la page
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await getHomePage();

    if (!response || !response.data || response.data.length === 0) {
      return { notFound: true }
    }

    const page = response.data[0];
    
    return { 
      props: { page: page, error: null }, 
      revalidate: 60
    };
  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
    return { props: { page: null, error: "Erreur lors du chargement de la page" + error } };
  }
};

export default PageHome;
