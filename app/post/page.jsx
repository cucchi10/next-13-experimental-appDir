import { Suspense } from 'react';
import style from '../../styles/post.module.css';
import ListOfPosts from './ListOfPosts'

export default function PostPage() {
  return (
    <section className={style.section}>
      <Suspense fallback={<p>Cargando Posts...</p>}>
        <ListOfPosts />
      </Suspense >
    </section >
  )
}