import Link from "next/link";

export default function HomePage() {
  return (
    <Link href="/parallel" className="border border-black px-2 py-1">
      go to parallel routes
    </Link>
  );
}
