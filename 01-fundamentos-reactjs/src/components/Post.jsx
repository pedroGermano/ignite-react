import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://github.com/pedroGermano.png"
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Germano</strong>
            <span>Frontend</span>
          </div>
        </div>
        <time title="13 de junho às 08:13h" dateTime="2022-06-13 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#"> #novoProjeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">
            #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
