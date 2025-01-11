import React, { useEffect, useState } from "react";
import Header from "@/app/_components/layouts/Header";
import Footer from "@/app/_components/layouts/Footer";
import { getHomePage } from "./api/pages";
import Error from "next/error";
import PageProps from "@/interfaces/page";
import Head from "next/head";
import WebPage from "@/app/_components/templates/WebPage";

const PageHome: React.FC = () => {
  const [page, setPage] = useState<PageProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const response = await getHomePage();
        setPage(response.data[0]);
      } catch (error) {
        console.error(error);
        setError("Erreur lors du chargement de la page");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

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
