// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: Date;
    slug: string;
  };
}
