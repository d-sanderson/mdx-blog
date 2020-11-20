import Link from "next/link";

export const HeadPost = ({ meta, isBlogPost, link }) => {
  return (
    <>
      <h1 className={isBlogPost ? "great-title" : null}>
        <Link href={"/blog" + link}>{meta.title}</Link>
      </h1>
      <div className="details">
        {isBlogPost ? null : <p>{meta.description}</p>}
        <span>{meta.date}</span>
        <span role="img" aria-label="one coffee">
          ☕ {meta.readTime + " min read"}
        </span>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #53b3cb;
          }
          .great-title {
            font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};
