import React from "react";
import "./AboutMeView.css";

function AboutMe() {
  return (
    <div className="container">
      <div className="textContainer">
        <img
          className="textimg"
          src="../../../assets/holdingmia.jpeg"
          alt="Thomas with his husky mia"
        />
        <p>
          The goal is simple: build cool applications that provide value to
          people.
          <br />
          It sounds simple but it actually took me a while to figure out what it
          is I actually want to do for a living. Throughout university and my
          work life as a technical consultant I have seen a littany of different
          projects in various fields with various technologies. There are so
          many options it can seem daunting.
          <br />
          I then reflected on the following questions:
          <br />
          "When were the times where you were truly engaged in your work? When
          did you willingly put in the extra effort? When was your attention
          captured in a way that you didn't see the time go by?"
          <br />
          The answer to those questions then seemed clear to me: My attention
          thus far was most engaged when I was contributing as a full stack
          engineer to a web application.
          <br />
          As for myself, I was born and raised in southern California to a
          French mother and Dutch father. When I was 10 we moved to Munich,
          Germany, where I have remained since. I love traveling around the
          world, especially warm places near the ocean, I love diving and
          snorkeling and recently started surfing. I read fiction and
          non-fiction every day (most recently I've been absolutely captivated
          by the sc-fi series "Red Rising" by Pierce Brown). I've been training
          calisthenics and with weights for the better part of a decade, and
          more recently have added bouldering and kick boxing to the mix. I also
          have a husky, Mia who is 13 years old and has my whole heart.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
