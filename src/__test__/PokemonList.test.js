import React from 'react';
import { PokemonList } from '../componentes/PokemonList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('render content', () => {

    const component = render(<PokemonList />)
    expect(component.container).toHaveTextContent("")
});
