
export default function Card({ title, description, image, imageAlt }) {
  //toda função Js dentro de um arquivo jsx vira um parametro
  return (
    <div className="card">
      <img src={image} alt={imageAlt} />
      <p className="first">{title}</p>
      <p>{description}</p>
    </div>
  );
}
