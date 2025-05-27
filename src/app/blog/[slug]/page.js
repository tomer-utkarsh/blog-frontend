import { getBlogBySlug } from '../../../lib/api';
import dynamicRenderer from '../../../component/DynamicRenderer';

export const revalidate = 10; // ISR - updates every 10 seconds

export default async function BlogPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  console.log(blog, 'dynamic page content ');

  return (
    <article>
      <h1>{blog?.title}</h1>
      <h3>By {blog?.author}</h3>
      {dynamicRenderer(blog?.content)}
    </article>
  );
}
