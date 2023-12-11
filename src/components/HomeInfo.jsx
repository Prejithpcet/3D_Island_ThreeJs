import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <>
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <a href={link} target="_blank" className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </a>
    </div>
  </>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Prejith</span>👋
      <br />A Full Stack Web and Blockchain Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many stacks and gained skills along the way"
      link="https://www.quickfolio.me/prejithp-contact"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Completed various projects on various stacks. Check out my projects"
      link="https://prejith-portfolio.netlify.app/"
      btnText="Go to Project Gallery"
    />
  ),
  4: (
    <InfoBox
      text="Need an aspiring developer or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Contact me"
    />
  ),
};

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
