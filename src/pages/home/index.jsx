import Header from "../../components/header";
import Content from "../../components/content";
import Card from "../../components/card";
import Relume from "../../assets/images/relume.svg"
import "./style.css";
import Work from "../../components/work";


export default function Home() {
  return <>
    <Header />;
    <Content />
    <div className="cards">
      <Card title="Highlight benefit one"
        image={Relume}
        imageAlt="Relume Icon"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      />
      <Card title={'Highlight benefit two'}
        image={Relume}
        imageAlt={"Relume Icon"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."}
      />
      <Card title={"Highlight benefit three"}
        image={Relume}
        imageAlt={"Relume Icon"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."}
      />
    </div>
    <Work />
  </>
}
