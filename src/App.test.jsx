import { test, describe } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

/**
* @vitest-environment jsdom
*/ 

//função e uma arrow function
test('deverá renderizar o texto corretamente', () => {

    //renderizar o componente
    render(<App />)

    //capturar o elemento que eu quero testar
    const text = screen.getByText('Vite + React')

    // dizer o que eu espero
    expect(text).toBeInTheDocument()
})