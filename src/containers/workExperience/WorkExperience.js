import React, {useContext, useEffect, useRef, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollButtons() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  }

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  function scrollByPage(direction) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({left: direction * el.clientWidth, behavior: "smooth"});
  }

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-carousel">
                <button
                  className={
                    "experience-scroll-btn experience-scroll-btn-left" +
                    (canScrollLeft ? "" : " experience-scroll-btn-hidden")
                  }
                  aria-label="Scroll to previous experiences"
                  onClick={() => scrollByPage(-1)}
                >
                  &#8249;
                </button>
                <div
                  className="experience-cards-div"
                  ref={scrollRef}
                  onScroll={updateScrollButtons}
                >
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <div className="experience-slide" key={i}>
                        <ExperienceCard
                          isDark={isDark}
                          cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  className={
                    "experience-scroll-btn experience-scroll-btn-right" +
                    (canScrollRight ? "" : " experience-scroll-btn-hidden")
                  }
                  aria-label="Scroll to next experiences"
                  onClick={() => scrollByPage(1)}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
