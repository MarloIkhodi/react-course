import "./style.css";
import Placholder from "../../assets/images/placeholder.svg";

// export default function ContentTwo({ image = Placholder, imageAlt = "Placeholder", right = null, left = null, feature = "feature!", title = "Titulo", description = "Descrição" }) {
//     return (
//         <section className="contentTwo">
//             {right ? (<img src={image} alt={imageAlt} />) : null}
//             <div>
//                 <h2>{feature}</h2>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 <button>Learn more</button>
//             </div>
//             {left ? (<img src={image} alt={imageAlt} />) : null}
//         </section>
//     )
// }

export default function ContentTwo({
  direction = null,
  img = Placholder,
  imgalt = "Placeholder",
  title = "Titulo",
  feature = "Feature",
  description = "Description",
}) {
  return (
    <section className={`contentTwo contentTwo${direction}`}>
      <img src={img} alt={imgalt} />
      <div>
        <h2>{feature}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Learn more</button>
      </div>
    </section>
  );
}
