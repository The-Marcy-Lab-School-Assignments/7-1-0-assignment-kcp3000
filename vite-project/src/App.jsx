import PokemonForm from './components/PokemonForm'
import Filter from './components/Filter'
import PokemonCollection from './components/PokemonCollection'
import PokemonContext from './context/PokemonContext'
import { useContext, useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const { allPokemon } = useContext(PokemonContext);
  const [filteredPokemon, setFilteredPokemon] = useState(allPokemon);

  useEffect(() => {
    setFilteredPokemon(allPokemon)
  }, [allPokemon])

  console.log(filteredPokemon)

  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonForm />
      <br />
      <Filter names={allPokemon} setNames={setFilteredPokemon} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon} />
    </div>
  );
}

export default App;
