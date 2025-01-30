import Link from "next/link";

export default async function Home({params, searchParams}) {
  console.log(await params)
  console.log(await searchParams)
  return (
    <>
      <h1>Technical Agency</h1>
      <Link href="/blogs">Blogs</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}