import React from 'react'

const PokemonRow = ({ index, onPokemonSelect }) => {
  return (
    <div
      index={index}
      className="pokemon-row"
      onClick={() => {
        onPokemonSelect(index)
      }}
    ></div>
  )
}

export default PokemonRow
