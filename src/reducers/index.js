import { combineReducers } from 'redux'
import { FETCH_ALLPOKEMON, FETCH_ONEPOKEMON } from '../action/types'

const allPokemonReducer = (store = {}, action) => {
  switch (action.type) {
    case FETCH_ALLPOKEMON:
      return { ...store, pokemonPayload: action.payload }

    case FETCH_ONEPOKEMON:
      return { ...store, selectedPokemon: action.payload }

    default:
      return store
  }
}

export default combineReducers({
  pokemons: allPokemonReducer,
})
