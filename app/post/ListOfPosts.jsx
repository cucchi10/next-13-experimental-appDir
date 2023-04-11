import style from '../../styles/post.module.css';
import LikeButton from './LikeButton'
import { get } from '../../services/ApiService'
import { apiPost } from '../../utils/constants'
import Link from "next/link"

export default async function ListOfPosts() {
  const { data: posts } = await get(apiPost)
  return posts.slice(0, 5).map(post => (
    <article className={style.article} key={post.id}>
      <Link href={{ pathname: `/post/${post.id}`, query: { post: JSON.stringify(post) } }} replace>
        <h2 className={style.h2}>{post.title}</h2>
        <p className={style.p}>{post.body}</p>
      </Link>
      <LikeButton />
    </article >
  ))
}