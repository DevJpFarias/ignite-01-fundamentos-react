import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="João Paulo" content="Alguma coisa"/>
          <Post author="Ana Paula" content="Outra coisa"/>
        </main>
      </div>
    </div>
  )
}