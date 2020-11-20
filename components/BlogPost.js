import { HeadPost } from './HeadPost'
import Link from 'next/link'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <Link href="/">Go Back</Link>

      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}