import React from "react";
import Link from "next/link";

import Footer from "@/app/_components/layouts/Footer";
import Header from "@/app/_components/layouts/Header";
import { getAllPosts } from "@/pages/api/posts";
import nextConfig from "../../../next.config";

interface Post {
    id: number,
    attributes: {
        title: string,
        publishedAt: Date,
        slug: string,
    }
}

interface PostsProps {
    locale: string;
    posts: Post[];
  }

const Posts: React.FC<PostsProps> = ({locale, posts}) => {
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
                            {new Date(post.attributes.publishedAt).toLocaleDateString(locale)}
                        </p>
                        <Link 
                            href={`/blog/${post.attributes.slug}`}
                            className="blog__post__link">Lire l&apos;article</Link>
                    </article>
                ))} 
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Posts;

// export async function getStaticPaths() {
//     // Génération des chemins pour chaque locale
//     const paths = nextConfig.locales.map((locale: string) => ({
//         params: { locale },
//     }));

//     return {
//         paths,
//         fallback: false, // false = retourne 404 pour les chemins non définis
//     };
// }
  
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