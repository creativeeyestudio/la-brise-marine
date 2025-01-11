import PageProps from "@/interfaces/page";
import { useEffect, useState } from "react";
import { getPage } from "./api/pages";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/app/_components/layouts/Header";
import Heroscreen from "@/app/_components/panels/Heroscreen";
import TextImage from "@/app/_components/panels/TextImage";
import TextDoubleImage from "@/app/_components/panels/TextDoubleImage";
import Parallax from "@/app/_components/panels/Parallax";
import Gallery from "@/app/_components/panels/Gallery";
import HtmlContent from "@/app/_components/panels/HtmlContent";
import Footer from "@/app/_components/layouts/Footer";

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
      <main>
        {blocks.map((block, index) => {
          switch (block.__component) {
            case "common.heroscreen":
              return <Heroscreen image={block.image} key={index} />;
            case "common.text-image":
              return (
                <TextImage
                  title={block.title}
                  content={block.text[0].children[0].text}
                  image={block.image}
                  key={index}
                />
              );
            case "common.text-double-image":
              return (
                <TextDoubleImage
                  title={block.title}
                  content={block.text[0].children[0].text}
                  image1={block.image1}
                  image2={block.image2}
                  key={index}
                />
              );
            case "common.parallax":
              return <Parallax image={block.image} key={index} />;
            case "common.gallery":
              return <Gallery data={block.images.data} key={index} />;
            case "common.html-content":
              return (
                <HtmlContent
                  htmlContent={block.code_html[0].children[0].text}
                  key={index}
                />
              );
            default:
              return <></>;
          }
        })}
      </main>
      <Footer />
    </>
  );
};

export default PageHome;
