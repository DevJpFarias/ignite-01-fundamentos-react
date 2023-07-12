import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="../src/images/developer.jpg" alt="" />

        <div className={styles.profile}> 
          <Avatar src={"https://avatars.githubusercontent.com/u/75543735?v=4"}/>

          <strong>João Paulo</strong>

          <span>Web Developer</span>
        </div>
        
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}