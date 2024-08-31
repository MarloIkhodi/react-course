import "./style.css";
import Relume from "../../assets/images/relume.svg";

export default function Card({
  title = "Titulo",
  description = "descrição",
  image = Relume,
  imageAlt = "Sem imagem",
}) {
  return (
    <div className="card">
      <img src={image} alt={imageAlt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
