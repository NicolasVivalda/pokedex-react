import { Link } from 'react-router-dom';
import '../estilos/PokemonList.css'

export function Lister({ listPokemon }) {

    return <div className="cards-container App">
        {listPokemon.map((r) => (
        <div key={r.name} className="card">
            <strong>{r.name} </strong>
            <Link to={`/detail/${r.name}`}>
                <button className='button'>
                    Ver detalles
                </button>
            </Link>
        </div>
    ))
    }</div>
}
