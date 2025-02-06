import Link from "next/link";
import User from "../_components/User";
import User1 from "@/component/User";

export default async function Home({params, searchParams}) {
  console.log(await params)
  console.log(await searchParams)
  return (
    <>
      <h1>Technical Agency</h1>
      <User />
      <User1 />
      <Link href="/blogs">Blogs</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}