import "./style.css";
import Relume from "../../assets/images/relume.svg"

export default function LittleCard({ title = "Titulo", description = "descrição", image = Relume, imageAlt = "Sem imagem", line = true }) {
    return (
        <section className="littleCard">
            <div className="verticalImage">
                <img src={image} alt={imageAlt} />
                {line ? (<p className="verticalLine"></p>) : null}
            </div>
            <div className="rightText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
}