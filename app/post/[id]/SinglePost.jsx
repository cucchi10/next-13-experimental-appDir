import style from '../../../styles/post.module.css';
export default function SinglePost({ post }) {
  return (
    <>
      {post ? (<>
        <article className={style.article} key={post.id}>
          <h2 className={style.h2Single}>{post.title}</h2>
          <p className={style.pSingle}>{post.body}</p>
        </article></>)
        : <h1>No hay datos a mostrar!</h1>}
    </>
  )
}