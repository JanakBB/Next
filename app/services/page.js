import Link from "next/link";

export default function Services() {
  return (
    <>
      <h1>All Services</h1>

      <p>
        <Link href="/services/web-development">Web Development</Link>
      </p>
      <p>
        <Link href="/app-development">App Development</Link>
      </p>
      <p>
        <Link href="/ui-ux">UI/UX</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO</Link>
      </p>
    </>
  );
}
