import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemon } from '../action'

class Overlay extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.pokemons.pokemonPayload && (
          <div className="overlay">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" />
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    pokemons: store.pokemons,
  }
}

export default connect(mapStateToProps, { fetchAllPokemon })(Overlay)
