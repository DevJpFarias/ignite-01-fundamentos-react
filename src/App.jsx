import { Post } from "./Post";
import { Header } from "./components/Header";
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="João Paulo" content="Alguma coisa"/>
      <Post author="Ana Paula" content="Outra coisa"/>
    </div>
  )
}