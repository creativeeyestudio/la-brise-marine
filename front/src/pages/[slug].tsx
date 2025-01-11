import PageProps from "@/interfaces/page";
import { useEffect, useState } from "react";
import { getPage } from "./api/pages";
import { useRouter } from "next/router";
import Error from "next/error";
import Head from "next/head";
import Header from "@/app/_components/layouts/Header";
import Footer from "@/app/_components/layouts/Footer";
import WebPage from "@/app/_components/templates/WebPage";

const PageHome: React.FC = () => {
  const [page, setPage] = useState<PageProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const response = await getPage(router.query.slug);
        setPage(response.data[0]);
      } catch (error) {
        console.error(error);
        setError("Erreur lors du chargement de la page");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [router.query.slug]);

  if (loading) {
    return (
      <>
        <p>Chargement en cours</p>
      </>
    );
  }

  if (error) {
    <>
      <p>{error}</p>
    </>;
  }

  if (!page) {
      return (
        <>
          <Error statusCode={404} />
        </>
      );
    }

  const blocks = page.attributes.content_page;

  return (
    <>
      <Head>
        <title>{page.attributes.meta_title}</title>
        <meta name="description" content={page.attributes.meta_desc} />
      </Head>
      <Header />
      <WebPage blocks={blocks}></WebPage>
      <Footer />
    </>
  );
};

export default PageHome;
