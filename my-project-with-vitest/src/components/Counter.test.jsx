import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest" // test tb pode aparecer como "it"
import Counter from "./Counter";

// ajuda a montar os elementos do DOM dentro do ambiente de testes

/**
* @vitest-environment jsdom
*/ 

// meu componente roda antes de cada casinho de test
describe ('Counter', () => {
    beforeEach(() => {  // antes de cada caso de test rode isso
        render (< Counter />) // renderizará um componente
    })
    
    // uma função test recebe 2 parâmetros: uma String e uma arrow function
    test('renderizará o valor inicial 0', () => {
    
        expect (screen.getByText('0')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toBeInTheDocument()
        expect(screen.getByTestId('count')).toHaveTextContent('0')
    
    })
    
    
    test('deverá acrescentar 1 qnd o botão Add for clicado', () => {
    
        expect(screen.getByTestId('add')).toBeInTheDocument()
    
        // vem de library
        fireEvent.click(screen.getByTestId('add'))
    
        expect(screen.getByTestId('count')).toHaveTextContent('1')
    })
    
    
    test('deverá diminuir 1 qnd o botão Substract for clicado', () => {
    
        expect(screen.getByTestId('subtract')).toBeInTheDocument()
    
        // vem de library
        fireEvent.click(screen.getByTestId('subtract'))
    
        expect(screen.getByTestId('count')).toHaveTextContent('-1')
    })
})