import React from "react";
import BlockTitle from "../components/BlockTitle";
import Button from "../components/Button";
import ButtonList from "../components/ButtonList";
import ProfilePhoto from "../components/ProfilePhoto";
import TitleCarousel from "../components/TitleCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function HomePage() {
  const titles = ["Teacher", "Software Engineer"];
  const testimonials = [
    {
      text: "The mind is not a vessel to be filled but a fire to be kindled.",
      author: "Plutarch",
    },
    {
      text: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
      author: "Albert Einstein",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="home-content">
            <div className="row flex-v-align">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <ProfilePhoto url="./img/st-1.jpg" />
              </div>

              <div className="col-sm-12 col-md-7 col-lg-7">
                <div className="home-text hp-left">
                  <TitleCarousel titles={titles} />
                  <h1>Stavros Charitakis</h1>
                  <p>
                    After a challenging career as a software engineer, I decided
                    to take the plunge and pursue my passion for teaching. My
                    enthusiasm for teaching and my commitment to helping others
                    is what makes me truly proud. I am currently in the process
                    of becoming highly proficient in the German language so that
                    I can finally apply my knowledge and experience to the
                    classroom in Berlin with the hope of making a meaningful
                    contribution to the lives of my future students and helping
                    them to reach their dreams and potential.
                  </p>
                  <ButtonList>
                    <Button
                      text="Download CV"
                      url="cv/lebenslauf.pdf"
                      target="_blank"
                    />
                  </ButtonList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockTitle title="Quotes" />

      <div className="testimonials">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </>
  );
}
