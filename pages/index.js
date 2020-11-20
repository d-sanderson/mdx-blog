import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  const postTitles = posts.map((post) => {
    return <Post key={post.link} post={post} />;
  });
  return <>{postTitles}</>;
}
