import React from 'react'
import { connect } from 'react-redux'
import { fetchOnePokemon } from '../action'

class PokemonData extends React.Component {
  renderSprites = () => {
    return Object.values(this.props.selectedPokemon.sprites)
      .filter((val) => {
        return typeof val === 'string'
      })
      .map((imageUrl, key) => {
        return (
          <img alt="img" src={imageUrl} key={key} width={100} height={100} />
        )
      })
  }

  renderMainImage = () => {
    let id = this.props.selectedPokemon.id.toString().padStart(3, '0')
    let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    return (
      <img
        alt={this.props.selectedPokemon.name}
        src={source}
        width={250}
        height={250}
      />
    )
  }

  render() {
    if (!this.props.selectedPokemon) {
      return <div>Please select a pokemon</div>
    }

    return (
      <div>
        <h1 className="pokemon-name">{this.props.selectedPokemon.name}</h1>
        <div>{this.renderMainImage()}</div>
        <div>{this.renderSprites()}</div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    selectedPokemon: store.pokemons.selectedPokemon,
  }
}
export default connect(mapStateToProps, { fetchOnePokemon })(PokemonData)
