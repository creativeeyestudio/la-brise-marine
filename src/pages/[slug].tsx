import { GetStaticPaths, GetStaticProps } from 'next';
import { getPage } from "../app/api/pages";
import Error from "next/error";
import Head from "next/head";
import WebPage from "@/app/_components/templates/WebPage";
import ContentPage from '@/app/_components/layouts/ContentPage';
import PageProps from '@/app/interfaces/page';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface PageWebProps {
  page: PageProps | null;
  error: string | null;
}

const PageWeb: React.FC<PageWebProps> = ({ page, error }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);

    if (page?.attributes.homepage) {
      router.push('/');
    }
  }, [page, router]);

  if (!isClient) {
    return null; // Empêche le rendu avant le montage du composant
  }
  
  if (error) {
    console.error(error);
    return <Error statusCode={500} />;
  }

  if (!page) {
    return <Error statusCode={404} />;
  }

  const isHomepage = page.attributes.homepage;

  if (isHomepage) {
    console.log("Homepage");
    router.push('/');
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  
  try {
    const response = await getPage(slug);
    
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

export default PageWeb;
