import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    // //objeto literal
    // const usuario = {
    //     nome: 'Jackson Santos',
    //     avatar: 'https://github.com/JackMorais.png'
    // }

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;