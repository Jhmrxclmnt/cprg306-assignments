import Link from "next/link";
export default function Header(){
  return (
    <main>
      <h1 className="text-4x1"> CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
        <Link href="week-2">Week2 - Assignment</Link>
        </li>
        <li>
        <Link href="week-3">Week3 - Assignment</Link>
        </li>
        <li>
        <Link href="week-4">Week4 - Assignment</Link>
        </li>
        <li>
        <Link href="week-5">Week5 - Assignment</Link>
        </li>
        <li>
        <Link href="week-6">Week6 - Assignment</Link>
        </li>
        <li>
        <Link href="week-7">Week7 - Assignment</Link>
        </li>
        <li>
        <Link href="week-8">Week8 - Assignment</Link>
        </li>
        <li>
        <Link href="week-10">Week10 - Assignment</Link>
        </li>
      </ul>
    </main>
  );
}