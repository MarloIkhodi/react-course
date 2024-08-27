import "./style.css";
import Header from "../../components/header";
import Content from "../../components/content";
import Card from "../../components/card";
import Relume from "../../assets/images/relume.svg"
import Work from "../../components/work";
import Testimonial from "../../components/testimonial";
import ContentTwo from "../../components/content-two";


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

    <ContentTwo
      feature="Feature one"
      title="Describe benefit of feature one"
      description="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
      right />

    <Testimonial userid={"Customer Name"}
      subuserid={"Position, Company name"}
      message={"\"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.\""}
    />

    <ContentTwo
      feature="Feature two"
      title="Describe benefit of feature two"
      description="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
      left />

    <Testimonial userid={"Name Surname"}
      subuserid={"Position, Company name"}
      message={"\"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.\""}
    />

    <ContentTwo
      feature="Feature three"
      title="Describe benefit of feature three"
      description="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
      right />

  </>
}
