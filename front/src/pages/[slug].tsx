import { GetServerSideProps } from 'next';
import { getPage } from "./api/pages";
import Error from "next/error";
import Head from "next/head";
import WebPage from "@/app/_components/templates/WebPage";
import ContentPage from '@/app/_components/layouts/ContentPage';
import PageProps from '@/interfaces/page';

interface PageWebProps {
  page: PageProps | null;
  error: string | null;
}

const PageWeb: React.FC<PageWebProps> = ({ page, error }) => {
  if (error) {
    return <Error statusCode={500} />;
  }

  if (!page) {
    return <Error statusCode={404} />;
  }

  const blocks = page.attributes.content_page;

  return (
    <ContentPage>
      <Head>
        <title>{page.attributes.meta_title}</title>
        <meta name="description" content={page.attributes.meta_desc} />
      </Head>
      <WebPage blocks={blocks} />
    </ContentPage>
  );
};

// Cette fonction sera exécutée à chaque requête côté serveur pour récupérer les données
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  try {
    const response = await getPage(slug);
    return { props: { page: response.data[0], error: null } };
  } catch (error) {
    return { props: { page: null, error: "Erreur lors du chargement de la page" } };
  }
};

export default PageWeb;
