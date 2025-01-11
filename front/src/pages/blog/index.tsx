// Blog.tsx
import { GetStaticProps } from "next";
import { getAllPosts } from "../api/posts";
import Head from "next/head";
import Link from "next/link";
import ContentPage from "@/app/_components/layouts/ContentPage";
import Image from "next/image";
import PostProps from "@/interfaces/post";
import { useState, useEffect } from "react";

interface PostsListProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsListProps> = ({ posts }) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    // Récupérer la langue depuis l'en-tête X-User-Language
    const userLanguage = document.documentElement.lang || "en";
    setLanguage(userLanguage);
  }, []);

  return (
    <ContentPage>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Nos articles" />
      </Head>

      <h1>Nos actualités</h1>
      <div className="blog__content">
        {posts.map((post: PostProps) => (
          <article className="blog__post" key={post.id}>
            <figure style={{ aspectRatio: "1/1", position: "relative" }}>
              <Image
                src={post.attributes.main_image.data.attributes.url}
                alt={post.attributes.main_image.data.attributes.alternativeText}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>

            <h2>{post.attributes.title}</h2>
            <p>{new Date(post.attributes.publishedAt).toLocaleDateString(language)}</p>
            <Link href={`/blog/${post.attributes.slug}`}>
              Lire l&apos;article
            </Link>
          </article>
        ))}
      </div>
    </ContentPage>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getAllPosts();
  const posts = postsData.data; // Vérifiez que vos données correspondent à cette structure

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
