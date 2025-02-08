// Post.tsx
import { GetServerSideProps } from "next";
import { getSinglePost } from "../api/posts";
import Head from "next/head";
import Image from "next/image";
import ContentPage from "@/app/_components/layouts/ContentPage";
import PostProps from "@/interfaces/post";
import Link from "next/link";
import { useState, useEffect } from "react";

interface PostPageProps {
  post: PostProps | null;
  error: string | null;
}

const PostPage: React.FC<PostPageProps> = ({ post, error }) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const userLanguage = document.documentElement.lang || "en";
    setLanguage(userLanguage);
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return (
      <ContentPage>
        <p>Aucun article trouvé.</p>;
      </ContentPage>
    )
  }

  const imageUrl = post.attributes.main_image?.data?.attributes?.url;
  const imageAlt = post.attributes.main_image?.data?.attributes?.alternativeText || post.attributes.title;

  return (
    <ContentPage>
      <Head>
        <title>{post.attributes.meta_title}</title>
        <meta name="description" content={post.attributes.meta_description} />
        <meta property="og:title" content={post.attributes.meta_title} />
        <meta property="og:description" content={post.attributes.meta_description} />
      </Head>

      <p>
        <Link href="/blog">Retour à la liste des articles</Link>
      </p>
      <article>
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + imageUrl}
          alt={imageAlt}
          width={post.attributes.main_image.data.attributes.width}
          height={post.attributes.main_image.data.attributes.height}
          layout="responsive"
        />
        <h1>{post.attributes.title}</h1>
        <p>
          Publié le: {new Date(post.attributes.publishedAt).toLocaleDateString(language)}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: post.attributes.content }}
        />
      </article>
    </ContentPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  try {
    const response = await getSinglePost(slug);
    if (response) {
      return { props: { post: response.data[0], error: null } };
    } else {
      return { notFound: true }
    }
  } catch (error) {
    return { props: { post: null, error: "Erreur lors du chargement de l'article." + error } };
  }
};

export default PostPage;
