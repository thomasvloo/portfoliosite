import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const TextContainer = styled.div`
  width: 67%;
  line-height: 1.3;
  font-size: ${(props) => props.theme.typography.fontSize.large};
`;

const ProfileImage = styled.img`
  width: 33%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 25%;
  object-position: center 30%;
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
`;

function AboutMeView() {
  return (
    <Container>
      <TextContainer>
        <ProfileImage
          src="../../../assets/holdingmia.jpeg"
          alt="Thomas with his husky Mia"
        />
        <p>
          The goal is simple: build cool applications that provide value to
          people.
          <br />
          It sounds simple but it actually took me a while to figure out what it
          is I actually want to do for a living. Throughout university and my
          work life as a technical consultant I have seen a litany of different
          projects in various fields with various technologies. There are so
          many options it can seem daunting.
          <br />
          I then reflected on the following questions:
          <br />
          &quot;When were the times where you were truly engaged in your work?
          When did you willingly put in the extra effort? When was your
          attention captured in a way that you didn&apos;t see the time go
          by?&quot;
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
          non-fiction every day (most recently I&apos;ve been absolutely
          captivated by the sci-fi series &quot;Red Rising&quot; by Pierce
          Brown). I&apos;ve been training calisthenics and with weights for the
          better part of a decade, and more recently have added bouldering and
          kickboxing to the mix. I also have a husky, Mia, who is 13 years old
          and has my whole heart.
        </p>
      </TextContainer>
    </Container>
  );
}

export default AboutMeView;
