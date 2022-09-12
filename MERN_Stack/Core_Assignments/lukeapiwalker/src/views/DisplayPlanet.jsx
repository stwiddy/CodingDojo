import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const DisplayPlanet = () => {
    const [planet, setPlanet] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend> DisplayPlanet.jsx</legend>
            {
                planet ?
                    <div>
                        <h1>Name: {planet.name}</h1>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Terrain: {planet.terrain}</h3>
                        <h3>Surface Water: {planet.surface_water}</h3>
                        <h3>Population: {planet.population}</h3>
                    </div> :
                    <h1>Invalid ID</h1>
            }
        </fieldset>
    )
}
export default DisplayPlanet