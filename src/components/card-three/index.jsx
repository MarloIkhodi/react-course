import "./style.css";
import ChevronUp from "../../assets/images/chevron-up.svg";

export default function CardThree({
  question = "Question",
  awnser = "Awnser",
  topside = true,
  bottomside = false,
}) {
  return (
    <section className="cardThree">
      {topside ? <p className="cardUpLine"></p> : null}
      <div className="firstBlock">
        <h3>{question}</h3>
        <img src={ChevronUp} alt="ChevronUp" />
      </div>
      <p>{awnser}</p>
      {bottomside ? <p className="cardDownLine"></p> : null}
    </section>
  );
}
