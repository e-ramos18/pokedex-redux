import { FETCH_ALLPOKEMON, FETCH_ONEPOKEMON } from './types'
import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchAllPokemon = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=151`)
  setTimeout(() => {
    dispatch({ type: FETCH_ALLPOKEMON, payload: response.data.results })
  }, 800)
}

export const fetchOnePokemon = (pokemon) => async (dispatch) => {
  const response = await axios.get(pokemon.url)

  dispatch({ type: FETCH_ONEPOKEMON, payload: response.data })
}
