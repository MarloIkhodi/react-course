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

export default function App() {
  return (
    <button onClick={() => alert("Função funcionando")}>Click Aqui</button>
  );
}
