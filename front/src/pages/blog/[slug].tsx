import Footer from "@/app/_components/layouts/Footer";
import Header from "@/app/_components/layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSinglePost } from "../api/posts";
import Post from "@/interfaces/post";
import DOMPurify from "dompurify";
import Image from "next/image";
import nextConfig from "../../../next.config";
import Head from "next/head";

const PostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const api = nextConfig.api_url;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    if (slug && typeof slug === "string") {
      const fetchPost = async () => {
        try {
          setLoading(true);
          const response = await getSinglePost(slug);
          setPost(response.data[0]);
        } catch (err) {
          console.error(err);
          setError("Erreur lors du chargement de l'article.");
        } finally {
          setLoading(false); // Fin du chargement
        }
      };

      fetchPost();

      const userLanguage = document.documentElement.lang || "en";
      setLanguage(userLanguage);
    }
  }, [slug]); // Exécute l'effet uniquement lorsque `slug` change

  // Affichage de l'état de chargement
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Affichage des erreurs éventuelles
  if (error) {
    return <p>{error}</p>;
  }

  // Si aucun post n'est trouvé, affichez un message
  if (!post) {
    return <p>Aucun article trouvé.</p>;
  }

  // Assurez-vous que `post.attributes` existe avant d'accéder à ses propriétés
  if (!post.attributes) {
    return <p>Données de l&apos;article non disponibles.</p>;
  }

  // Assurez-vous que les données d'image existent
  const imageUrl = post.attributes.main_image?.data?.attributes?.url
    ? api + post.attributes.main_image.data.attributes.url
    : null;
  const imageAlt = post.attributes.main_image?.data?.attributes?.alternativeText || post.attributes.title;
  const imageWidth = post.attributes.main_image?.data?.attributes?.width;
  const imageHeight = post.attributes.main_image?.data?.attributes?.height;

  const content = DOMPurify.sanitize(post.attributes.content);

  // Rendu final une fois que les données sont récupérées
  return (
    <>
      <Head>
        <title>{post.attributes.meta_title}</title>
        <meta name="description" content={post.attributes.meta_description} />
        <meta property="og:title" content={post.attributes.meta_title} />
        <meta property="og:description" content={post.attributes.meta_description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:locale" content={language} />
        <meta property="og:site_name" content="Nom de votre site" />
      </Head>
      <Header />
      <main>
        <p>
          <Link href="/blog">Retour à la liste des articles</Link>
        </p>
        <article>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            layout="responsive"
            sizes="(max-width: 768px) 100vw"
            priority
          />
          <h1>{post.attributes.title}</h1>
          <p>
            Publié le :{" "}
            {new Date(post.attributes.publishedAt).toLocaleDateString(language)}
          </p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
