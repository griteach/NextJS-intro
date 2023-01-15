import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: white;
        }
        a {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
