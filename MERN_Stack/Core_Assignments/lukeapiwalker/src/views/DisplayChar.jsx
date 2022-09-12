import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const DisplayChar = () => {
    const [char, setChar] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setChar(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend> DisplayChar.jsx</legend>
            {
                char ?
                    <div>
                        <h1>Name: {char.name}</h1>
                        <h3>Height: {char.height}</h3>
                        <h3>Mass: {char.mass}</h3>
                        <h3>Hair Color: {char.hair_color}</h3>
                        <h3>Skin Color: {char.skin_color}</h3>
                    </div> :
                    <h1>Invalid ID</h1>
            }
        </fieldset>
    )
}

export default DisplayChar