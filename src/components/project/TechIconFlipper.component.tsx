import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import techIcons from 'constants/techIcons.constants';

interface TechIconFlipperProps {
  tech: string;
  flipInterval?: number;
}

const FlipContainer = styled.div`
  perspective: 1000px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 20px 10px 0;
`;

const FlipInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'none')};
`;

const FlipSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipBack = styled(FlipSide)`
  transform: rotateY(180deg);
`;

const TechIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TechIconFlipper: React.FC<TechIconFlipperProps> = ({
  tech,
  flipInterval = 4000,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const iconPath = techIcons[tech];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, flipInterval);

    return () => clearInterval(interval);
  }, [flipInterval]);

  return (
    <FlipContainer>
      <FlipInner isFlipped={isFlipped}>
        <FlipSide>
          <span>{tech}</span>
        </FlipSide>
        <FlipBack>
          {iconPath ? (
            <TechIcon src={iconPath} alt={tech} />
          ) : (
            <span>{tech}</span>
          )}
        </FlipBack>
      </FlipInner>
    </FlipContainer>
  );
};

export default TechIconFlipper;
