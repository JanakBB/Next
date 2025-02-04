"use client";
import { usePathname } from "next/navigation";

export default function notFound() {
  const a = usePathname();
  return (
    <>
      <h1>{a} not found !</h1>
      <p>Could not found the page you are looking for</p>
    </>
  );
}
