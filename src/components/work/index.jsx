import "./style.css";
import CardTwo from "../card-two";

export default function Work() {
  return (
    <section className="howWorks">
      <div className="worksLeft">
        <div className="worksBox">
          <h2>How it works</h2>
          <h3>
            Headline with USP related to how your product or service works
          </h3>
        </div>
        <button>Learn more</button>
      </div>
      <div className="rightCards">
        <CardTwo
          title="Short summary of step one"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <CardTwo
          title="Short summary of step two"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <CardTwo
          title="Short summary of step three"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <CardTwo
          title="Short summary of step four"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          line={false}
        />
      </div>
    </section>
  );
}
