import { useState, useEffect } from "react";
import "./style.css";

export default function PokemonApi() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sprites, setSprites] = useState({})
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151 ")
            .then((res) => res.json())
            .then((data) => {
                setPokemons(data.results)
                setLoading(false)
                data.results.forEach((pokemon) => {
                    fetch(pokemon.url)
                        .then((res) => res.json())
                        .then((details) => {
                            setSprites((prevSprites) => ({
                                ...prevSprites, [pokemon.name]: details.sprites
                            }))
                        })
                })
            })

            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    // if (loading) {return <p>Carregando...</p>} same as {loading && (<p>Carregando...</p>)}
    // if (error) { return <p>Errro: {error}</p>} same as {error && (<p>Erro: {error}</p>)}
    return (
        <>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            <div className="pokedexContainer">
                <h1>Pokedex</h1>
                <div className="pokedexCards">
                    {pokemons.map((pokemon) => (
                        <div className="pokedexCardsChild" key={pokemon.name}>
                            {sprites[pokemon.name] && (
                                <img
                                    src={sprites[pokemon.name].front_default}
                                    alt={pokemon.name}
                                />
                            )}
                            <p>{pokemon.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
