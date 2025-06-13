import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-100 p-8 shadow-md">
        <div className="text-2xl font-bold text-blue-600">
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="FlexiGlob Logo"
              width={100}
              height={40}
            />
          </div>
        </div>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </nav>
      <main className="text-center mt-20 text-xl">
        <h1>Welcome to FlexiGlob Project</h1>
      </main>
    </div>
  );
}
