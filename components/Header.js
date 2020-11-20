import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <h1>Lernin Next</h1>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: #1f222f;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}