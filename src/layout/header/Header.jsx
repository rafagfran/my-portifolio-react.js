import style from './Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <div className={style.header_container}>
                <div className={style.title}>
                    <h1 id={style.myName}> &lt; RAFAEL /&gt;</h1>
                </div>
                <nav className={style.header_navigator}>
                    <ul>
                        <li><a href='/aboutMe' title='About Me'>About Me</a></li>
                        <li><a href='/Skills' title='Skills'>Skills</a></li>
                        <li><a href='/Projects' title='Projects'>Projects</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;
