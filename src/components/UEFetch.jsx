import PokemonAbilities from './UEFetchComponents/PokemonAbilities.jsx'
import PokemonList from './UEFetchComponents/PokemonList.jsx'

const UEFetch = props => {

    return (
        <div className='pages'>
            <PokemonList pokemon={props.pokemon} setCurrentFavorite={props.setCurrentFavorite} />
            <PokemonAbilities current={props.currentFavorite} />
        </div>
    )


}

export default UEFetch