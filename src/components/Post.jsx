import styles from './Post.module.css';

export function Post(){
    return(
        <> 
         <article className={styles.post}> 
            <header> 
                <div className={styles.author}> 
                  <img className={styles.avatar} src='https://github.com/daniel8486.png' />
                   <div className={styles.authorInfor}> 
                    <strong> Daniel Djam </strong>
                    <span> Web Developer </span>
                   </div>
                </div>
                <time title="Maio-2023" dateTime=""> Publicado a 1h </time>
            </header>

            <div className={styles.content}> 
              <p> 
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Qui facere debitis explicabo accusamus veniam perspiciatis, 
                  consequuntur et labore laudantium voluptas iure illo quidem 
                  repudiandae quia ducimus dolorem perferendis eius fugit. 
              </p>
              <p> 
                <a href='#'> Meu Link </a>
              </p>
              <p> 
                <a href='#'> Meu Link 2 </a>
              </p>
            </div>
         </article>
        </>
    )
}