import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon, fetchOnePokemon } from '../action'
// import PokemonRow from './PokemonRow'

class PokemonList extends React.Component {
  componentDidMount() {
    this.props.fetchAllPokemon()
  }

  renderList = () => {
    if (!Array.isArray(this.props.pokemons.pokemonPayload)) {
      return (
        <div className="overlay">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" />
        </div>
      )
    }

    if (Array.isArray(this.props.pokemons.pokemonPayload)) {
      return this.props.pokemons.pokemonPayload.map((pokemon, index) => {
        return (
          <div
            className={`pokemon-row ${
              this.props.pokemons.selectedPokemon &&
              this.props.pokemons.selectedPokemon.name === pokemon.name
                ? 'active'
                : ''
            }`}
            key={index}
            onClick={() => this.props.fetchOnePokemon(pokemon)}
          >
            {pokemon.name}
          </div>
        )
      })
    }
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = (store) => {
  return {
    pokemons: store.pokemons,
  }
}

export default connect(mapStateToProps, { fetchAllPokemon, fetchOnePokemon })(
  PokemonList,
)
