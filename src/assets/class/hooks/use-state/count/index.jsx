import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0) //possivel inserir o valor que quiser no state, boolean, float, etc

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