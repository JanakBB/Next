import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  return {
    title: `Blog-${await params.blog}`,
  };
}

export default async function Blog({ params }) {
  const {blog} = await params;
if(!/^\d+$/.test(blog)){
  notFound();
}
  return (
    <>
      <h3>Blog no: {blog}</h3>
    </>
  );
}
