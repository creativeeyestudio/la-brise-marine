import React, { useEffect, useState } from "react";
import Header from "@/app/_components/layouts/Header";
import Footer from "@/app/_components/layouts/Footer";
import { getHomePage } from "./api/pages";
import Error from "next/error";
import PageProps from "@/interfaces/page";
import Head from "next/head";
import Heroscreen from "@/app/_components/panels/Heroscreen";
import TextDoubleImage from "@/app/_components/panels/TextDoubleImage";
import Parallax from "@/app/_components/panels/Parallax";
import TextImage from "@/app/_components/panels/TextImage";

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

  const pageBlock = page.attributes.content_page;

  return (
    <>
      <Head>
        <title>{page.attributes.meta_title}</title>
        <meta name="description" content={page.attributes.meta_desc} />
      </Head>
      <Header />
      <main>
        {pageBlock.map((content) => {
          console.log(content);
          switch (content.__component) {
            case "common.heroscreen":
              return <Heroscreen image={content.image} />;
              break;
            case "common.text-image":
              return (
                <TextImage
                  title={content.title}
                  content={content.text[0].children[0].text}
                  image={content.image}
                />
              );
              break;
            case "common.text-double-image":
              return (
                <TextDoubleImage
                  title={content.title}
                  content={content.text[0].children[0].text}
                  image1={content.image1}
                  image2={content.image2}
                />
              );
              break;
            case "common.parallax":
              return <Parallax image={content.image} />;
              break;
            default:
              return <></>;
              break;
          }
        })}
      </main>
      <Footer />
    </>
  );
};

export default PageHome;
