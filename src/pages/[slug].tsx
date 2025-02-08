import { GetServerSideProps } from 'next';
import { getPage } from "./api/pages";
import Error from "next/error";
import Head from "next/head";
import WebPage from "@/app/_components/templates/WebPage";
import ContentPage from '@/app/_components/layouts/ContentPage';
import PageProps from '@/interfaces/page';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface PageWebProps {
  page: PageProps | null;
  error: string | null;
}

const PageWeb: React.FC<PageWebProps> = ({ page, error }) => {
  const router = useRouter();
  
  useEffect(() => {
    if (page?.attributes.homepage) {
      router.push('/');
    }
  }, [page, router]);
  
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
    <ContentPage>
      <Head>
        <title>{page.attributes.meta_title}</title>
        <meta name="description" content={page.attributes.meta_desc} />
      </Head>
      <WebPage blocks={blocks} />
    </ContentPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  try {
    const response = await getPage(slug);
    
    if (response) {
      return { props: { page: response.data[0], error: null } };
    }
    
    return { notFound: true }
  } catch (error) {
    return { props: { page: null, error: "Erreur lors du chargement de la page " + error } };
  }
};

export default PageWeb;
