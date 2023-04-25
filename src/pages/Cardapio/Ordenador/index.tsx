import styles from './Ordenador.module.scss'

const opcoes = [
    {
        "nome": "",
        "value": ""
    },
    {
        "nome": "Porção",
        "value": "porcao"
    },
    {
        "nome": "Qtd. pessoas",
        "value": "qtd_pessoas"
    },
    {
        "nome": "Preço",
        "value": "preco"
    }
]

export default function Ordenador() {
    return (
        <button className={styles.ordenador}>
            <span>Ordenar Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}