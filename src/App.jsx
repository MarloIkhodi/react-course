// function Filho({ approved }) {
//   return (
//     <>
//       {approved ? (
//         <div>
//           <p>Aprovado</p>
//           <img
//             src="https://i.etsystatic.com/28810262/r/il/2fc5e0/5785166966/il_1080xN.5785166966_nvy4.jpg"
//             alt="Aprovado"
//           />
//         </div>
//       ) : (
//         <div>
//           <p>Reprovado</p>
//           <img
//             src="https://thumbs.dreamstime.com/b/no-emoticon-29087585.jpg"
//             alt="Reprovado"
//           ></img>
//         </div>
//       )}
//     </>
//   );
// }

// export default function App() {
//   return <Filho approved={null} />;
// }
// function Filho({ onAlert }) {
//   return <button onClick={onAlert}>Receba seu alert </button>;
// }

// export default function App() {
//   const handleAlert = () => alert("Receba seu doce")
//   return <Filho onAlert={handleAlert} />;
// }

// function Saudacao({ nome = 'marlo' }) {
//   return <h1>Ola, {nome}!</h1>
// }

// export default function App() {
//   return <Saudacao nome="Pedro" />
// }

import Home from "./pages/home";


export default function App() {
  return <>
    <Home />
  </>
}
