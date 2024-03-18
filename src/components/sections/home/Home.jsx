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
                    <a href="https://github.com/rafagfran"><i className='bx bxl-github'/></a>
                    <a href="https://www.linkedin.com/in/rafael-g-francisco-90a886210/"><i className='bx bxl-linkedin-square' /></a>
                </div>
                <div className={Style.text_box}>
                    <h1>Hi, I'm Rafael Gonçalves</h1>
                    <h1>and i'm&nbsp;
                        <span ref={typedElementRef} className={Style.skills}>Backend developer</span>
                    </h1>
                    <p>Atualmente graduando na FATEC-SJRP. Tenho três anos de experiência como profissional de TI e me dedico a aprimorar minhas habilidades no campo do desenvolvimento de aplicações, que é meu foco profissional.</p>
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
