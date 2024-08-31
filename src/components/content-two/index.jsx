// import "./style.css"
// import Placholder from "../../assets/images/placeholder.svg"


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
const directImg = {
    left: "leftCss",
    right: "rightCss"
}
export default function ContentTwo({ direction, img, imgalt, title, feature, description }) {
    const directOfImg = directImg[direction]
    return (<section className="content-`{directOfImg}`">

    </section>

    )
}