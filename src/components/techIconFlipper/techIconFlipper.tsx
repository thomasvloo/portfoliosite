import './techIconFlipper.css';

import React, { useEffect, useState } from 'react';
import techIcons from 'types/techIcons';

interface TechIconFlipperProps {
  tech: string;
  flipInterval?: number;
}

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
    <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-inner">
        <div className="flip-front">
          <span>{tech}</span>
        </div>
        <div className="flip-back">
          {iconPath ? (
            <img src={iconPath} alt={tech} className="techIcon" />
          ) : (
            <span>{tech}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechIconFlipper;
