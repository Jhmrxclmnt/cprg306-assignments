import Link from "next/link";
export default function Header() {
    return (
        <main>
            <p>Jhomer Clemente</p>
            <p>
                <Link href={`https://github.com/Jhmrxclmnt/cprg306-assignments`}> https://github.com/Jhmrxclmnt/cprg306-assignments</Link>
            </p>
        </main>
    );
}