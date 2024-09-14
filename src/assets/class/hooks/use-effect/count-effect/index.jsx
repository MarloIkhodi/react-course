import { useEffect, useState } from "react"

export default function CountEffect() {
    const [count, setCount] = useState(0) //possivel inserir o valor que quiser no state, boolean, float, etc
    useEffect(() => { console.log("UseEffect ativado pela dependencia count"), [count] })
    // function handleCount(){
    //     setCount(count + 1)
    // }

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
        </div>
    )
}