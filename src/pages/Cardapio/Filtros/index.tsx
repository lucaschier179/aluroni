import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

const filtros = [
    {
        "label": "Massas",
        "id": 1
    },
    {
        "label": "Carnes",
        "id": 2
    },
    {
        "label": "Combos",
        "id": 3
    },
    {
        "label": "Veganos",
        "id": 4
    }
]

export default function Filtros() {

    function selecionarFiltro(opcao: IOpcao) {

    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}