import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />

        <main>
            <Post
              author="Diego Fernandes"
              content="Lorem ipsum  dolar sit amet odio aliquam."
            />

            <Post
              author="Pedro Germano"
              content="Frontend"
          />
        </main>
      </section>
    </>
  )
}

