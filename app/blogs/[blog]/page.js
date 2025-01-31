export async function generateMetadata({ params }) {
  return {
    title: `Blog-${await params.blog}`,
  };
}

export default async function Blog({ params }) {
  const blog = await params.blog;
  console.log(await params);
  return (
    <>
      <h3>Blog no: {blog}</h3>
    </>
  );
}
