function Filho({ children }) {
  return <div className="filho">{children}</div>;
}

export default function App() {
  return (
    //no caso de children, nao necessita chamar nenhum atributo, somente colocar dentro da tag
    <Filho>
      <p>Sou uma tag P passada por children</p>
    </Filho>
  );
}
