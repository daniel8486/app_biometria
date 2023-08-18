import { useState } from 'react'
import { Post }from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
     <Header /> 

     <div className={styles.wrapper}> 
       <Sidebar />
       <main> 
        <Post /> 
       </main>  
     </div>

    </>
  )
}

//export default App;

//exemplo de default export 
// function name(){
// return( <> <h1/>  default export </h1> </>)
//}

// export defalt name; 

// Vantagem => podemos na exportacao usar qualquer nome exmeplo
// import NameOne from './name''; 