import Link from 'next/link';
import { getBlogs } from '../lib/api';

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {blogs.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post?.slug}`}>
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
