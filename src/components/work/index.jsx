import "./styles.css";
import Relume from "../../assets/images/relume.svg"
import LittleCard from "../little-card"

export default function Work() {
    return (
        <section className="howWorks">
            <div className="worksLeft">
                <div className="worksBox">
                    <h2>How it works</h2>
                    <h3>Headline with USP related to how your product or service works</h3>
                </div>
                <button>Learn more</button>
            </div>
            <div className="rightCards">
                <LittleCard
                    title="Short summary of step one"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                    image={Relume}
                    imageAlt="Relume"
                    line
                />
                <LittleCard
                    title="Short summary of step two"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                    image={Relume}
                    imageAlt="Relume"
                    line
                />
                <LittleCard
                    title="Short summary of step three"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                    image={Relume}
                    imageAlt="Relume"
                    line
                />
                <LittleCard
                    title="Short summary of step four"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                    image={Relume}
                    imageAlt="Relume"
                    line={false}
                />
            </div>
        </section>
    );
}