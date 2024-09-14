import { useState } from "react"
import { useEffect } from "react"


export default function PokemonApi() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <h1>Hello World!</h1>
    )
}