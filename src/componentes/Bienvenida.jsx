import logos from "../img/pokeapi.png";
import { useState, useEffect } from 'react';
import * as API from '../servicios/ListAPI';
import { FcFlashOn } from "react-icons/fc"



export function Bienvenida() {

  const [search, setSearch] = useState()

  const [totalPokemon, setTotalPokemon] = useState()

  useEffect(() => {
    API.getAllPokemonList().then((r) => setTotalPokemon(r.count))
  }, []);

  return (!search == "" ? (console.log("vacio")) : (

    <div className="App">
      <header className="App-header">
        <img src={logos} className="" alt="logo" width={300} />
        <p>
          <FcFlashOn /> <code>Conoce los <strong>{totalPokemon}</strong> pokemones existentes</code> <FcFlashOn />
        </p>
      </header>

      {/* <input className="buscarPokemon" placeholder="Ingrese nombre pokemon" autoFocus
        onChange={(e) => { setSearch(e.target.value) }}
      /> */}

    </div>
  ))
};
