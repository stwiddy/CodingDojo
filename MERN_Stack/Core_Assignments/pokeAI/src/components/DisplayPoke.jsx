import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DisplayPoke = (props) => {
    const [pokemon, setPokemon] = useState()

    useEffect (() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.submittedName}`)
        .then(response => {
            console.log("calling API")
            setPokemon(response.data)
        })
        .catch()
    }, [props.submittedName])

    return (
        <div>
            {
                pokemon?
                <div>
                    <h1> {pokemon.name} </h1>
                    <img src={pokemon.sprites.front_default} />
                    <img src={pokemon.sprites.back_default} />
                    <table style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Abilities</th>
                            </tr>
                            <tr>
                                <td>Basic Ability: </td>
                                <td>{pokemon.abilities[0].ability.name}</td>
                            </tr>
                            <tr>
                                <td>Hidden Ability: </td>
                                <td>{pokemon.abilities[1].ability.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>:
                <h1>Searching....</h1>
            }
        </div>
    )
}

export default DisplayPoke