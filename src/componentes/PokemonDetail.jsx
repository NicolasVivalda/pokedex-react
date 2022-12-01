import { useParams, Link } from 'react-router-dom';
import * as API from '../servicios/ListAPI';
import { useState, useEffect } from 'react';
import { ClassNames } from '@emotion/react';
import { FcApproval } from "react-icons/fc";
import '../estilos/PokemonDetail.css'

export function PokemonDetail() {

    const [detailPokemon, setDetailPokemon] = useState({});

    const { name } = useParams();

    useEffect(() => {
        API.getPokemonByName(name).then((r) => setDetailPokemon(r)).catch(err => console.log(err))
    }, [name]);

    return (!detailPokemon.length === 0 ? (<div>Loading...</div>) : (
        <><div className='detail'>
            <h1 style={{ color: "red" }}> Hola {name}!!!</h1>
            <img src={detailPokemon.sprites?.front_default} alt='The Sprite of the Pokemon' />
            <p><strong>Nivel de experiencia: </strong>{detailPokemon.base_experience}</p>
            <p><strong>Peso: </strong>{detailPokemon.weight}</p>
            <ul style={{ alignItems: "flex-start" }}><strong>Sus habilidades: </strong>{detailPokemon.abilities?.map((a) => <ul key={a.ability?.name}> <FcApproval />{a.ability?.name} </ul>)}</ul>

            <Link to={`/`}>
                <button className='back'>
                    Back
                </button>
            </Link>
        </div>
        </>
    ))
}
