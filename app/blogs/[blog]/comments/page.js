export default async function Blog({ params }) {
  const paramsObj = await params;
  const { blog } = paramsObj;
  console.log(paramsObj);
  return (
    <div>
      All comments on <b>{blog}</b>
    </div>
  );
}
