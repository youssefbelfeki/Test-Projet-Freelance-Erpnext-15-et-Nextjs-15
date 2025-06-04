import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3 text-center text-xl ">
      <h1> FlexiGlob Project</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
