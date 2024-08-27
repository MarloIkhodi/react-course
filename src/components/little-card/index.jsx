import "./styles.css";

export default function LittleCard({ title = "Titulo", description = "descrição", image = null, imageAlt = "Sem imagem", line = true }) {
    return (
        <section className="littleCard">
            <div className="verticalImage">
                <img src={image} alt={imageAlt} />
                {line ? (<p className="verticalLine"></p>) : (<p></p>)}
            </div>
            <div className="rightText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
}