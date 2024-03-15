import style from './Main.module.css'
import Salutation from '../../components/salutation/Salutation'

function Main(){
    return(
        <main className={style.main}>
            <div className={style.main_container}>
                <Salutation/>
            </div>
        </main>

    )
}

export default Main