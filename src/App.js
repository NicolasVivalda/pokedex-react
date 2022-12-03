import { React, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Bienvenida } from './componentes/Bienvenida';
import './App.css';
import { PokemonList } from './componentes/PokemonList'
import { PokemonDetail } from './componentes/PokemonDetail'

export function App() {

  return (

    <Fragment >
      <Routes>
        <Route path='/pokedex-react' element={
          <>
            <Bienvenida />
            <PokemonList />
          </>} />

        <Route path='/pokedex-react/detail/:name' element={<PokemonDetail />} />

      </Routes>

    </Fragment>

  );
}
