import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        <Link href="/home">
          <button>Start</button>
        </Link>
      </p>
    </div>
  );
}
