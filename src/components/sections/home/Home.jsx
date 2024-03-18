import Style from './Home.module.css'
import React, {useEffect, useRef } from 'react';
import Typed from 'typed.js';
    
function Home(){
    // Referência para o elemento em que queremos inicializar o Typed.js
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Configurações para o Typed.js
    const options = {
      strings: ['Back-end Developer', 'IT Technician', 'Cellist'], // Lista de textos a serem digitados
      typeSpeed: 100, // Velocidade de digitação em milissegundos
      backSpeed: 100, // Velocidade de apagar em milissegundos
      backDelay: 100,
      loop: true // Se deve repetir ou não
    };

    // Inicializar o Typed.js
    const typed = new Typed(typedElementRef.current, options);

    // Retorna uma função de limpeza para remover o Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []); // Executa somente uma vez, equivalente ao componentDidMount

    return(
        
        <section className={Style.home}>
            
            <div className={Style.content_box}>
                <div className={Style.icon_box}>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-linkedin-square' ></i>
                </div>
                <div className={Style.text_box}>
                    <h1>Hi, I'm Rafael Gonçalves</h1>
                    <h1>and i'm&nbsp;
                        <span ref={typedElementRef} className={Style.skills}>Backend developer</span>
                    </h1>
                    <p>Quis incididunt consequat occaecat pariatur aliqua consequat ex. Do occaecat esse reprehenderit laboris cillum aliqua tempor deserunt mollit ipsum do velit. Esse et qui in dolor nisi. Adipisicing qui aute ex deserunt adipisicing enim.</p>
                    <button type='button' className={Style.btn}>Dowload CV</button>
                    
                </div>
                <div className={Style.img_box}>
                    <img src="src/assets/avatar.png" alt="avatar" className={Style.img}/>
                </div>
            </div>
        </section>
    )
    
}


export default Home
