import React from 'react';
import { Bienvenida } from '../componentes/Bienvenida';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('render content', () => {
    const component = render(<Bienvenida />)

    component.getAllByText ('Conoce los pokemones existentes')
    //expect(component.container).toHaveTextContent('Conoce los pokemones existentes')
})
