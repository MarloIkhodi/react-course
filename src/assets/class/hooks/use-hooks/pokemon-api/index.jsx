import { useState, useEffect } from "react";

export default function PokemonApi() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
            .then((res) => res.json())
            .then((data) => {
                setPokemons(data.results)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])
    // if (loading) {return <p>Carregando...</p>} mesmo que {loading && (<p>Carregando...</p>)}
    // if (error) { return <p>Errro: {error}</p>} mesmo que {error && (<p>Erro: {error}</p>)}
    return (
        <>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            <div>
                <h1>Lista de pokemons</h1>
                <ul>
                    {pokemons.map((pokemon, index) => {
                        <li key={index}>(pokemon.name)</li>
                    })}
                </ul>
            </div>
        </>
    );
}
