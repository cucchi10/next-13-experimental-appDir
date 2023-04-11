import SinglePost from "./SinglePost";
import Link from "next/link"
import style from '../../../styles/post.module.css';
export default function Post({ searchParams }) {
  const { post: postStringify } = searchParams || { post: null }

  let post = null;
  if (postStringify) {
    post = JSON.parse(postStringify)
  }
  return (
    <><section className={style.section}>
      <SinglePost post={post} />
      <Link href={{ pathname: `/post/${post.id}/comments`, query: { post: JSON.stringify(post) } }} replace>
        <p style={{ cursor: 'pointer' }}>Ver comentarios...</p>
      </Link>
    </section></>
  )
}