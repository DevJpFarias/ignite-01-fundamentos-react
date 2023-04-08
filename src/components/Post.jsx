import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/75543735?v=4" />

          <div className={styles.authorInfo}>
            <strong>João Paulo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio de 2022 às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea, dignissimos ratione sed ab culpa, quidem consequuntur quo, a sint accusamus modi suscipit excepturi fugit nobis tempore beatae eveniet. Sint!</p>
        <p>
          <a href="#">#Sei lá</a>{' '}
          <a href="#">#Hashtag</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe um feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}