import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape__itens'>
        <section className='rodape__area'>
            <div>
                <img src='/img/fb.png' alt='Facebook' />
                <img src='/img/tw.png' alt='Twitter' />
                <img src='/img/ig.png' alt='Instagram' />
            </div>
            <div>
            <img src='/img/logo.png' alt='Logotipo Organo' />
            </div>
            <div>
                <p>
                    Desenvolvido por <a href='https://github.com/glhrmlima'>@glhrmdev</a>
                </p>
            </div>
        </section>
        </footer>
    )
}

export default Rodape