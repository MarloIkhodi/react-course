import { useEffect } from "react"

export default function Exemple() {

    useEffect(() => { console.log("Use Effect rodando") }, [])


    return (
        <h1>Sou exemplo de useeffect</h1>
    )
}