import React from 'react';
import { getAllPokemonList } from '../servicios/ListAPI';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

const listMock = [
    { name: 'pruba1', url: 'urlPrueba1' },
    { name: 'pruba2', url: 'urlPrueba2' },
]

describe('Prueba de ListAPI', () => {
    it("Devuelve respuesta correcta", () => {
        const response = getAllPokemonList();
        expect(response).resolves.toEqual(listMock);
    });

    it("Devuelve respuesta correcta mockeando Fetch", () => {
        global.fetch = () => Promise.resolve({
            json: () => Promise.resolve(listMock)
        })

        const response = getAllPokemonList();
        expect(response).resolves.toEqual(listMock);
    })
})
