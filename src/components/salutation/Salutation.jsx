import style from './Salutation.module.css'

function Salutation(){
    return(
        <section>
            <div className={style.salutation_container}>
                <div className={style.aboutMe}>
                    <div className={style.intro}>
                        <h2 id={style.title}>Hi, I'm Rafael Gonçalves</h2>
                        <p id={style.resume}>IT professional passionate about software development.</p>
                    </div>
                    <div className={style.hobbies_container}>
                        <h3 id={style.hobbies_title}>My Hobbies</h3>
                        <div id={style.border_wrap}>
                            <ul id={style.hobbies_list}>
                                <li className={style.items}>Open the VSCode</li>
                                <li className={style.items}>Open the git terminal</li>
                                <li className={style.items}>Code in java</li>
                                <li className={style.items}>Code in React.js</li>
                                <li className={style.items}>Code in Node.js</li>
                                <li className={style.items}>Code in...Ah, you already understand that I like coding</li>
                                <li className={style.items}>Ahh and I love music too(I play an instrument called the cello)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.avatar_image}>
                    <img src='./src/assets/avatar.png' alt='my avatar' />
                </div>
            </div>
        </section>

    )
}
export default Salutation