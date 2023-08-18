import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <> 
         <aside className={styles.sidebar}> 
           <img className={styles.cover} src='https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
           <div className={styles.profile}> 
             <img className={styles.avatar} src='https://github.com/daniel8486.png' />
             <strong>Daniel Jonas </strong>
             <span> Web Developer </span>
           </div>

           <footer>

            <a href="#">
             <PencilLine size={20}/>  
             Perfil 
            </a>

           </footer>
         </aside>
        </>
    )
}