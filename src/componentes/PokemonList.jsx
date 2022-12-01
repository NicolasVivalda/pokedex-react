import { list, Box } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as API from '../servicios/ListAPI';
import '../estilos/PokemonList.css';
import { Lister } from './Lister'

export function PokemonList() {

    const [listPokemon, setListPokemon] = useState([]);

    useEffect(() => {
        API.getAllPokemonList().then((r) => setListPokemon(r.results))
    }, []);


    useEffect ( () => {
        const storedListPokemon = JSON.parse(localStorage.getItem("lisPokemon"));
        if (storedListPokemon) {
            setListPokemon(storedListPokemon)
        } 
    }, [])
    
    useEffect ( () => {
        localStorage.setItem("lisPokemon", JSON.stringify(listPokemon))
    }, [listPokemon])

    return <Lister listPokemon={listPokemon} />
}


// function PokemonList() {

//     const [listPokemon, setListPokemon] = useState([]);

//     useEffect(() => {
//         API.getAllPokemonList().then((r) => setListPokemon(r.results))
//     }, []);

//     return <Lister listPokemon={listPokemon} />
// }