import Link from "next/link";
export default function Header(){
  return (
    <main>
      <h1 className="text-4x1"> CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
        <Link href="week-2">Week2</Link>
        </li>
        <li>
        <Link href="week-3">Week3</Link>
        </li>
      </ul>
    </main>
  );
}