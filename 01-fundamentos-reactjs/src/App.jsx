import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Pedro Germano" content="Frontend" />

          <Post author="Pedro Germano" content="Frontend" />
        </main>
      </section>
    </>
  );
}
