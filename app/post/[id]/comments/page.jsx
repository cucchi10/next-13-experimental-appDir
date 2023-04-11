import { get } from '../../../../services/ApiService'
import { apiPost } from '../../../../utils/constants'
import SinglePost from "../SinglePost";
import style from '../../../../styles/post.module.css';
export default async function Comments({ params, searchParams }) {
  const { post: postStringify } = searchParams || { post: null }
  let post = null;
  if (postStringify) {
    post = JSON.parse(postStringify)
  }
  const { id } = params
  const { data: comments } = await get(`${apiPost}/${id}/comments`)

  return (
    <>
      <section className={style.section}>
        <SinglePost post={post} />
        <ul className={style.ul}>
          {comments.map(comment => (
            <li className={style.li} key={comment.id}>
              <h2 className={style.h2Comment}>{comment.name}</h2>
              <p className={style.pComment} >{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}