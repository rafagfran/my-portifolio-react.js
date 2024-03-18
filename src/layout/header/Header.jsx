import Style from './Header.module.css'


function Header(){

    return(
        <header>
            <h1>&lt; RAFAEL /&gt;</h1>

            <nav>
                <a href="#" className={Style.active}>Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portifolio</a>
                <a href="#">Contact</a>
                
            </nav>
        </header>
    )

}

export default Header
