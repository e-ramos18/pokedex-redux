import React from 'react'
import PokemonList from '../pokemon/PokemonList'
import PokemonData from '../pokemon/PokemonData'
import Overlay from '../pokemon/Overlay'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <aside>
        <PokemonList />
      </aside>
      <main>
        <PokemonData />
      </main>
      <Overlay />
    </div>
  )
}

export default App
