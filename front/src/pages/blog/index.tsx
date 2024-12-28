import React, { useEffect, useState } from "react";
import Link from "next/link";

import Footer from "@/app/_components/layouts/Footer";
import Header from "@/app/_components/layouts/Header";
import { getAllPosts } from "@/pages/api/posts";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [language, setLanguage] = useState<string>('en');
  useEffect(() => {
    // Récupérer la langue depuis l'en-tête X-User-Language
    const userLanguage = document.documentElement.lang || 'en';
    setLanguage(userLanguage);
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Nos actualités</h1>
        <div className="blog__content">
          {posts.map((post: Post) => (
            <article className="blog__post" key={post.id}>
              <h2 className="blog__post__name">{post.attributes.title}</h2>
              <p className="blog__post__date">
                {new Date(post.attributes.publishedAt).toLocaleDateString(language)}
              </p>
              <Link
                href={`blog/${post.attributes.slug}`}
                className="blog__post__link"
              >
                Lire l&apos;article
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  // Récupération des articles
  const postsData = await getAllPosts();
  const posts = postsData.data; // Vérifiez que vos données correspondent à cette structure

  return {
    props: {
      posts,
    },
  };
}
