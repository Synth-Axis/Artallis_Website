import React, { useEffect, useState } from "react";
import "./bouncingballs.scss";

const colors = [
  "#cc6699",
  "#bbce00",
  "#03abe5",
  "#198ece",
  "#79ccf3",
  "#f2921a",
  "#fccd00",
];

const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Ball = ({ size, color }) => {
  const positionStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    top: `${getRandomValue(0, 100)}vh`,
    left: `${getRandomValue(0, 100)}vw`,
    animationDelay: `${getRandomValue(0, 3)}s`,
  };

  return <div className="ball" style={positionStyle}></div>;
};

const BouncingBalls = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const newBalls = [];
    for (let i = 0; i < 10; i++) {
      const size = getRandomValue(50, 150);
      const color = getRandomColor();
      newBalls.push({ size, color });
    }
    setBalls(newBalls);
  }, []);

  return (
    <div className="balls-container">
      {balls.map((ball, index) => (
        <Ball key={index} size={ball.size} color={ball.color} />
      ))}
    </div>
  );
};

export default BouncingBalls;
