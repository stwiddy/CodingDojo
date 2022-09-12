
import React, {useState} from 'react'
import DisplayPoke from './DisplayPoke'

const FetchPoke = () => {
    const [pokemonName, setPokemonName] = useState("pikachu")
    const [confirmedName, setConfirmedName] = useState("pikachu")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setConfirmedName(pokemonName)
    }
    return (
        <div>
            <h1>Find your Pokemon</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <DisplayPoke submittedName={confirmedName} />
        </div>
    )
}

export default FetchPoke